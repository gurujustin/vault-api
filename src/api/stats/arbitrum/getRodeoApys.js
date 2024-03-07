const BigNumber = require('bignumber.js');

const LiquidityMiningAbi = require('../../../abis/RodeoLiquidityMining.json');
const pools = require('../../../data/arbitrum/rodeoPools.json');
const { default: ERC20Abi } = require('../../../abis/ERC20Abi');
import { fetchContract } from '../../rpc/client';
import getApyBreakdown from '../common/getApyBreakdown';

const liquidityMiningAddr = '0x3aEe6cA602C060883201B89c64cb5F782F964879';
const RDO = {
  address: '0x033f193b3Fceb22a440e89A2867E8FEE181594D9',
};
const DECIMALS = '1e18';

const getRodeoApys = async () => {
  let promises = [];
  pools.forEach(pool => promises.push(getPoolApy(pool)));
  const farmAprs = await Promise.all(promises);

  const res =  getApyBreakdown(pools, {}, farmAprs);
  console.log(res)

  return res;
};

const getTotalStakedInUsd = async (
  tokenAddr,
  oracle,
  oracleId,
  decimals = '1e18',
  chainId = 56
) => {
  const tokenContract = fetchContract(tokenAddr, ERC20Abi, chainId);
  const totalStaked = new BigNumber(
    (await tokenContract.read.balanceOf([liquidityMiningAddr])).toString()
  );
  let tokenPrice;
  if (oracle == 'tokens' && oracleId == 'ribUSDC') {
    const totalSupply = new BigNumber((await tokenContract.read.totalSupply()).toString());
    const totalLiquidity = new BigNumber((await tokenContract.read.getTotalLiquidity()).toString());
    tokenPrice = totalLiquidity.dividedBy(totalSupply);
  } else {
    tokenPrice = await fetchPrice({ oracle, id: oracleId });
  }

  console.log(totalStaked.toString(), tokenPrice.toString())
  return totalStaked.times(tokenPrice).dividedBy(decimals);
};

const getYearlyRewardsInUsd = async (poolId, chainId) => {
  const liquidityMiningContract = fetchContract(liquidityMiningAddr, LiquidityMiningAbi, chainId);
  const rewardsPerDay = new BigNumber(
    (await liquidityMiningContract.read.rewardPerDay()).toString()
  );
  const totalAllocPoint = new BigNumber(
    (await liquidityMiningContract.read.totalAllocPoint()).toString()
  );
  const v = await liquidityMiningContract.read.poolInfo([poolId]);
  const allocPoint = new BigNumber(v[3].toString());

  const daysPerYear = 365;
  const yearlyRewards = rewardsPerDay
    .times(daysPerYear)
    .times(allocPoint)
    .dividedBy(totalAllocPoint);

  try {
    const res = await fetch(
      `https://api.geckoterminal.com/api/v2/simple/networks/arbitrum/token_price/${RDO.address}`
    ).then(res => res.json());
    const price = new BigNumber(Object.values(res.data.attributes.token_prices)[0]);
    const yearlyRewardsInUsd = yearlyRewards.times(price).dividedBy(DECIMALS);

    return yearlyRewardsInUsd;
  } catch (error) {
    console.log(error);
  }

  return 0;
};

const getPoolApy = async pool => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(pool.poolId, pool.chainId),
    getTotalStakedInUsd(pool.address, pool.oracle, pool.oracleId, pool.decimals, pool.chainId),
  ]);

  console.log(yearlyRewardsInUsd.toString(), totalStakedInUsd.toString())
  return yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
};

module.exports = getRodeoApys;
