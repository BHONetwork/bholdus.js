export default {
  rpc: {},
  types: {
    BscPrimitivesBscHeader: {
      parent_hash: 'H256',
      uncle_hash: 'H256',
      coinbase: 'Address',
      state_root: 'H256',
      transactions_root: 'H256',
      receipts_root: 'H256',
      log_bloom: 'H2048',
      difficulty: 'U256',
      number: 'u64',
      gas_limit: 'U256',
      gas_used: 'U256',
      timestamp: 'u64',
      extra_data: 'Vec<u8>',
      mix_digest: 'H256',
      nonce: 'Vec<u8>',
    },
  },
};
