const AcceleratingDistributor = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rewardToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenCumulativeStaked',
        type: 'uint256',
      },
    ],
    name: 'Exit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RecoverToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardsToSend',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenLastUpdateTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenRewardPerTokenStored',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userRewardsOutstanding',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userRewardsPaidPerToken',
        type: 'uint256',
      },
    ],
    name: 'RewardsWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'averageDepositTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cumulativeBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenCumulativeStaked',
        type: 'uint256',
      },
    ],
    name: 'Stake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'baseEmissionRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxMultiplier',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'secondsToMaxMultiplier',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lastUpdateTime',
        type: 'uint256',
      },
    ],
    name: 'TokenConfiguredForStaking',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'remainingCumulativeBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenCumulativeStaked',
        type: 'uint256',
      },
    ],
    name: 'Unstake',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
    ],
    name: 'baseRewardPerToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'baseEmissionRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxMultiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'secondsToMaxMultiplier',
        type: 'uint256',
      },
    ],
    name: 'configureStakingToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
    ],
    name: 'exit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'getAverageDepositTimePostDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
    ],
    name: 'getCumulativeStaked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getOutstandingRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getTimeSinceAverageDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getUserRewardMultiplier',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getUserStake',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'cumulativeBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'averageDepositTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardsAccumulatedPerToken',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardsOutstanding',
            type: 'uint256',
          },
        ],
        internalType: 'struct AcceleratingDistributor.UserDeposit',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
    ],
    name: 'multicall',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'results',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'recoverToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
    ],
    name: 'stakeFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'stakingTokens',
    outputs: [
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'baseEmissionRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxMultiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'secondsToMaxMultiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'cumulativeStaked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardPerTokenStored',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastUpdateTime',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'stakedToken',
        type: 'address',
      },
    ],
    name: 'withdrawReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export default AcceleratingDistributor;
