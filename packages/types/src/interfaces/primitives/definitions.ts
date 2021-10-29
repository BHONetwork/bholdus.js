export default {
  rpc: {},
  types: {
    CurrencyId: {
      _enum: {
        Token: '(TokenSymbol)',
        DexShare: '(DexShare,DexShare)',
      },
    },
    TokenSymbol: {
      _enum: {
        Native: null,
        Token: '(TokenInfo)',
      },
    },
    DexShare: {
      _enum: {
        Token: '(TokenSymbol)',
      },
    },
    TokenInfo: {
      id: 'u32',
    },
    CurrencyIdOf: 'CurrencyId',
    TradingPair: '(CurrencyId, CurrencyId)',
    ExchangeRate: 'FixedU128',
  }
};
