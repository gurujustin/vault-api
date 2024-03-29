const MultiFeeDistribution = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [
      {
        type: 'address',
        name: '_stakingToken',
        internalType: 'address',
      },
      {
        type: 'address[]',
        name: '_minters',
        internalType: 'address[]',
      },
    ],
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'previousOwner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Recovered',
    inputs: [
      {
        type: 'address',
        name: 'token',
        internalType: 'address',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardAdded',
    inputs: [
      {
        type: 'uint256',
        name: 'reward',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardPaid',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'rewardsToken',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'reward',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardsDurationUpdated',
    inputs: [
      {
        type: 'address',
        name: 'token',
        internalType: 'address',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'newDuration',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Staked',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawn',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'addReward',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '_distributor',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'approveRewardDistributor',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '_distributor',
        internalType: 'address',
      },
      {
        type: 'bool',
        name: '_approved',
        internalType: 'bool',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'tuple[]',
        name: 'rewards',
        internalType: 'struct MultiFeeDistribution.RewardData[]',
        components: [
          {
            type: 'address',
            name: 'token',
            internalType: 'address',
          },
          {
            type: 'uint256',
            name: 'amount',
            internalType: 'uint256',
          },
        ],
      },
    ],
    name: 'claimableRewards',
    inputs: [
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'total',
        internalType: 'uint256',
      },
      {
        type: 'tuple[]',
        name: 'earningsData',
        internalType: 'struct MultiFeeDistribution.LockedBalance[]',
        components: [
          {
            type: 'uint256',
            name: 'amount',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'unlockTime',
            internalType: 'uint256',
          },
        ],
      },
    ],
    name: 'earnedBalances',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'exit',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'getReward',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'getRewardForDuration',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'lastTimeRewardApplicable',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'lockDuration',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'total',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'unlockable',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'locked',
        internalType: 'uint256',
      },
      {
        type: 'tuple[]',
        name: 'lockData',
        internalType: 'struct MultiFeeDistribution.LockedBalance[]',
        components: [
          {
            type: 'uint256',
            name: 'amount',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'unlockTime',
            internalType: 'uint256',
          },
        ],
      },
    ],
    name: 'lockedBalances',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'lockedSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'mint',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'minters',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'notifyRewardAmount',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'reward',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'recoverERC20',
    inputs: [
      {
        type: 'address',
        name: 'tokenAddress',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenAmount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'periodFinish',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'rewardRate',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'lastUpdateTime',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'rewardPerTokenStored',
        internalType: 'uint256',
      },
    ],
    name: 'rewardData',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'rewardDistributors',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'rewardPerToken',
    inputs: [
      {
        type: 'address',
        name: '_rewardsToken',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    name: 'rewardTokens',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'rewards',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'rewardsDuration',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'stake',
    inputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
      {
        type: 'bool',
        name: 'lock',
        internalType: 'bool',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'contract IMintableToken',
      },
    ],
    name: 'stakingToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
    name: 'totalBalance',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'totalSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
    name: 'unlockedBalance',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'userRewardPerTokenPaid',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdrawExpiredLocks',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'penaltyAmount',
        internalType: 'uint256',
      },
    ],
    name: 'withdrawableBalance',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
] as const;

export default MultiFeeDistribution;
