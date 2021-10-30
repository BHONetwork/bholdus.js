export default {
  rpc: {},
  types: {
    BholdusRuntimeProxyType: 'ProxyType',
    BeefyPrimitivesCryptoPublic: 'BeefyId',
    BeefyPrimitivesMmrBeefyNextAuthoritySet: 'BeefyNextAuthoritySet',
    BholdusRuntimeOpaqueSessionKeys: {
      grandpa: 'AccountId',
      aura: 'AccountId',
      imOnline: 'AccountId',
      authorityDiscovery: 'AccountId',
      beefy: '[u8; 33]',
    },
  },
};
