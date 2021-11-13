export default {
  rpc: {},
  types: {
    NftClassData: {
      attributes: 'BTreeMap<Vec<u8>, Vec<u8>>',
    },
    NftTokenData: {
      attributes: 'BTreeMap<Vec<u8>, Vec<u8>>',
    },
    SupportNftClassInfo: {
      totalIssuance: 'u64',
      owner: 'AccountId',
      data: 'NftClassData',
    },
    SupportNftTokenInfo: {
      metadata: 'BoundedVec<u8, 1024>',
      owner: 'AccountId',
      data: 'NftTokenData',
    },
  },
};
