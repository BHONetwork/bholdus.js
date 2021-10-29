export default {
  rpc: {},
  types: {
    AssetId: 'CurrencyId',
    TAssetBalance: 'u128',
    AssetBalance: {
      free: 'Balance',
      reserved: 'Balance',
      is_frozen: 'bool',
      sufficient: 'bool',
      extra: '()',
    },
    AssetIdentity: {
      additional: 'Vec<(Data, Data)>',
      basic_information: 'BasicInformation',
      social_profiles: 'SocialProfile',
    },
    BasicInformation: {
      project_name: 'Data',
      official_project_website: 'Data',
      official_email_address: 'Data',
      logo_icon: 'Data',
      project_sector: 'Data',
      project_description: 'Data',
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
      twitter: 'Data',
    },
    Approval: {
      amount: 'Balance',
      deposit: 'Balance',
    },
  },
};
