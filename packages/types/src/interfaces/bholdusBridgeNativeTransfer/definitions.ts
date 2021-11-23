export default {
  rpc: {},
  types: {
    BholdusBridgeNativeTransferOutboundTransferInfo: {
      from: 'AccountId',
      to: 'Vec<u8>',
      amount: 'Balance',
      target_chain: 'u16',
      service_fee: 'Balance',
    },
  },
};
