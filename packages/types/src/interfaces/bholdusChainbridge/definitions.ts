// [object Object]
// SPDX-License-Identifier: Apache-2.0

export default {
  rpc: {},
  types: {
    ChainId: 'u8',
    ResourceId: '[u8; 32]',
    DepositNonce: 'u64',
    ProposalVotes: {
      votes_for: 'Vec<AccountId>',
      votes_against: 'Vec<AccountId>',
      status: 'ProposalStatus'
    },
    ProposalStatus: {
      _enum: {
        Initiated: null,
        Approved: null,
        Rejected: null
      }
    },
    Erc721Token: {
      id: 'TokenId',
      metadata: 'Vec<u8>'
    },
    TokenId: 'U256',
    Address: 'MultiAddress',
    LookupSource: 'MultiAddress',
    BholdusChainbridgeProposalVotes: 'ProposalVotes'
  }
};
