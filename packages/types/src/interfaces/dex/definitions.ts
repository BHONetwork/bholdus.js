export default {
  rpc: {},
  types: {
    TradingPairStatus: {
      _enum: {
        Disabled: null,
        Enabled: null,
        Provisioning: '(ProvisioningParameters)',
      },
    },
    ProvisioningParameters: {
      minimum_contribution: '(Balance,Balance)',
      target_contribution: '(Balance,Balance)',
      accumulated_contribution: '(Balance, Balance)',
    },
    BholdusDexTradingPairStatus: 'TradingPairStatus',
  },
};
