// [object Object]
// SPDX-License-Identifier: Apache-2.0

export default {
  rpc: {},
  types: {
    AssetId: 'CurrencyId',
    BholdusTokensAssetIdentity: {
      additional: 'Vec<(Data, Data)>',
      basic_information: 'BasicInformation',
      social_profiles: 'SocialProfile'
    },
    BasicInformation: {
      project_name: 'Data',
      official_project_website: 'Data',
      official_email_address: 'Data',
      logo_icon: 'Data',
      project_sector: 'Data',
      project_description: 'Data'
    },
    SocialProfile: {
      whitepaper: 'Data',
      medium: 'Data',
      github: 'Data',
      reddit: 'Data',
      telegram: 'Data',
      discord: 'Data',
      slack: 'Data',
      facebook: 'Data',
      linkedin: 'Data',
      twitter: 'Data'
    },
    BholdusTokensAssetBalance: {
      free: 'Balance',
      reserved: 'Balance',
      is_frozen: 'bool',
      sufficient: 'bool',
      extra: '()'
    },
    BholdusTokensApproval: {
      amount: 'Balance',
      deposit: 'Balance'
    },
    BholdusTokensAssetDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      supply: 'BalanceOf',
      deposit: 'BalanceOf',
      minBalance: 'BalanceOf',
      isSufficient: 'bool',
      accounts: 'u32',
      approvals: 'u32',
      isFrozen: 'bool'
    },
    BholdusTokensRegistration: {
      deposit: 'BalanceOf',
      info: 'BholdusTokensAssetIdentity',
      isVerifiable: 'bool'
    },
    BholdusTokensAssetMetadata: {
      deposit: 'BalanceOf',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      isFrozen: 'bool'
    },
    BholdusTokensDestroyWitness: {
      accounts: 'Compact<u32>',
      sufficients: 'Compact<u32>',
      approvals: 'Compact<u32>'
    }
  }
};
