// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BholdusPrimitivesCurrencyCurrencyId, BholdusPrimitivesDexTradingPair } from '@bholdus/types/interfaces/bholdusPrimitives';
import type { BholdusRuntimeProxyType } from '@bholdus/types/interfaces/bholdusRuntime';
import type { ApiTypes } from '@polkadot/api/types';
import type { Bytes, Null, Option, Result, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletElectionProviderMultiPhaseElectionCompute, PalletImOnlineSr25519AppSr25519Public, PalletMultisigTimepoint, PalletStakingExposure, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    bagsList: {
      /**
       * Moved an account from one bag to another. \[who, from, to\].
       **/
      Rebagged: AugmentedEvent<ApiType, [AccountId32, u64, u64]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited into the account (e.g. for transaction fees). \[who,
       * deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior). \[who,
       * amount_slashed\]
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
       **/
      Withdraw: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      BountyAwarded: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      BountyCanceled: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      BountyClaimed: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      BountyExtended: AugmentedEvent<ApiType, [u32]>;
      /**
       * New bounty proposal. \[index\]
       **/
      BountyProposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      BountyRejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    chainBridge: {
      /**
       * Chain now available for transfers (chain_id)
       **/
      ChainWhitelisted: AugmentedEvent<ApiType, [u8]>;
      /**
       * FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
       **/
      FungibleTransfer: AugmentedEvent<ApiType, [u8, u64, U8aFixed, U256, Bytes]>;
      /**
       * GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
       **/
      GenericTransfer: AugmentedEvent<ApiType, [u8, u64, U8aFixed, Bytes]>;
      /**
       * NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
       **/
      NonFungibleTransfer: AugmentedEvent<ApiType, [u8, u64, U8aFixed, Bytes, Bytes, Bytes]>;
      /**
       * Voting successful for a proposal
       **/
      ProposalApproved: AugmentedEvent<ApiType, [u8, u64]>;
      /**
       * Execution of call failed
       **/
      ProposalFailed: AugmentedEvent<ApiType, [u8, u64]>;
      /**
       * Voting rejected a proposal
       **/
      ProposalRejected: AugmentedEvent<ApiType, [u8, u64]>;
      /**
       * Execution of call succeeded
       **/
      ProposalSucceeded: AugmentedEvent<ApiType, [u8, u64]>;
      /**
       * Relayer added to set
       **/
      RelayerAdded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Relayer removed from set
       **/
      RelayerRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Vote threshold has changed (new_threshold)
       **/
      RelayerThresholdChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Vot submitted against proposal
       **/
      VoteAgainst: AugmentedEvent<ApiType, [u8, u64, AccountId32]>;
      /**
       * Vote submitted in favour of proposal
       **/
      VoteFor: AugmentedEvent<ApiType, [u8, u64, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    chainBridgeTransfer: {
      /**
       * Resource id is registered successfully. [resource_id, currency_id]
       **/
      ResourceIdRegistered: AugmentedEvent<ApiType, [U8aFixed, BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Resource id is unregistered successfully. [resource_id, currency_id]
       **/
      ResourceIdUnregistered: AugmentedEvent<ApiType, [U8aFixed, BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A code with the specified hash was removed.
       * 
       * This happens when the last contract that uses this code hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [H256]>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [H256]>;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * Triggered when the current schedule is updated.
       **/
      ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * Contract has been removed.
       * 
       * # Note
       * 
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [H256, u32, u32]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [H256]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId32, u32, H256, u32]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId32, H256, bool, u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    currencies: {
      /**
       * Update balance success. \[currency_id, who, amount\]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, i128]>;
      /**
       * Deposit success. \[currency_id, who, amount\]
       **/
      Deposited: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Currency transfer success. \[currency_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Withdraw success. \[currency_id, who, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dex: {
      /**
       * Add liqudity to a trading pair successfully. \[who, currency_id_0, pool_0_increment, currency_id_1,
       * pool_1_increment, share_increment\]
       **/
      AddLiquidity: AugmentedEvent<ApiType, [AccountId32, BholdusPrimitivesCurrencyCurrencyId, u128, BholdusPrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * Add provision to a trading pair successfully.
       * \[who, currency_id_0, contribution_0, currency_id_1, contribution_1\]
       **/
      AddProvision: AugmentedEvent<ApiType, [AccountId32, BholdusPrimitivesCurrencyCurrencyId, u128, BholdusPrimitivesCurrencyCurrencyId, u128]>;
      /**
       * Remove liquidity to a trading pair successfully. \[who, currency_id_0,
       * pool_0_decrement, currency_id_1, pool_1_decrement, share_decrement\]
       **/
      RemoveLiqudity: AugmentedEvent<ApiType, [AccountId32, BholdusPrimitivesCurrencyCurrencyId, u128, BholdusPrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * Swap is successful. \[who, trading_path, supply_amount, target_amount\]
       **/
      Swap: AugmentedEvent<ApiType, [AccountId32, Vec<BholdusPrimitivesCurrencyCurrencyId>, u128, u128]>;
      /**
       * Trading pair is disabled. \[trading_pair\]
       **/
      TradingPairDisabled: AugmentedEvent<ApiType, [BholdusPrimitivesDexTradingPair]>;
      /**
       * Trading pair is enabled. Either from disabled or zero accumulated provisioning trading
       * pair. \[trading_pair\]
       **/
      TradingPairEnabled: AugmentedEvent<ApiType, [BholdusPrimitivesDexTradingPair]>;
      /**
       * Trading pair is enabled from provisioning successfully. \[currency_id_0,
       * pool_0_amount, currency_id_1, pool_1_amount, total_share_amount\]
       **/
      TradingPairEnabledFromProvisioning: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, u128, BholdusPrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * Trading pair is in provisioning stage. \[trading_pair\]
       **/
      TradingPairProvisioning: AugmentedEvent<ApiType, [BholdusPrimitivesDexTradingPair]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The election has been finalized, with `Some` of the given computation, or else if the
       * election failed, `None`.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [Option<PalletElectionProviderMultiPhaseElectionCompute>]>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The signed phase of the given round has started.
       **/
      SignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A solution was stored with the given compute.
       * 
       * If the solution is signed, this means that it hasn't yet been processed. If the
       * solution is unsigned, this means that it has also been processed.
       * 
       * The `bool` is `true` when a previous solution was ejected to make room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [PalletElectionProviderMultiPhaseElectionCompute, bool]>;
      /**
       * The unsigned phase of the given round has started.
       **/
      UnsignedPhaseStarted: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      IdentityCleared: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      IdentityKilled: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      IdentitySet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      JudgementGiven: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      JudgementRequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [u32]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [PalletImOnlineSr25519AppSr25519Public]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId32, PalletStakingExposure]>>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId32, AccountId32, U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [U8aFixed, Bytes]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId32, AccountId32, H256]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type,
       * disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId32, AccountId32, BholdusRuntimeProxyType, u16]>;
      /**
       * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
       **/
      ProxyAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, BholdusRuntimeProxyType, u32]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    recovery: {
      /**
       * Lost account has been successfully recovered by rescuer account.
       * \[lost, rescuer\]
       **/
      AccountRecovered: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       * \[lost, rescuer\]
       **/
      RecoveryClosed: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process has been set up for an \[account\].
       **/
      RecoveryCreated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       * \[lost, rescuer\]
       **/
      RecoveryInitiated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A recovery process has been removed for an \[account\].
       **/
      RecoveryRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       * \[lost, rescuer, sender\]
       **/
      RecoveryVouched: AugmentedEvent<ApiType, [AccountId32, AccountId32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [ITuple<[u32, u32]>, Option<Bytes>, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has stopped participating as either a validator or nominator.
       * \[stash\]
       **/
      Chilled: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      EraPaid: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * A nominator has been kicked from a validator. \[nominator, stash\]
       **/
      Kicked: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [u32]>;
      /**
       * The stakers' rewards are getting paid. \[era_index, validator_stash\]
       **/
      PayoutStarted: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * The nominator has been rewarded by this amount. \[stash, amount\]
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    templateModule: {
      /**
       * Event documentation should end with an array that provides descriptive names for event
       * parameters. [something, who]
       **/
      SomethingStored: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * Some asset `asset_id` was frozen. \[asset_id]\
       **/
      AssetFrozen: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Some asset `asset_id` was thawed. \[asset_id]\
       **/
      AssetThawed: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Some asset `asset_id` was verified. \[asset_id]\
       **/
      AssetVerified: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Some assets were destroyed. \[asset_id, owner, balance\]
       **/
      Burned: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Some asset class was created. \[asset_id, creator, owner\]
       **/
      Created: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, AccountId32]>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * An account was created with some free balance. \[asset_id, account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Some asset class was force-created. \[asset_id, owner\]
       **/
      ForceCreated: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * Some account `who` was frozen. \[asset_id, who\]
       **/
      Frozen: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * A name was set or reset (which will remove all judgements). \[asset_id]\
       **/
      IdentitySet: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * Some assets were issued. \[asset_id, owner, total_supply\]
       **/
      Issued: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Metadata has been cleared for an asset. \[asset_id\]
       **/
      MetadataCleared: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId]>;
      /**
       * New metadata has been set for an asset. \[asset_id, name, symbol, decimals, is_frozen\]
       **/
      MetadataSet: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, Bytes, Bytes, u8, bool]>;
      /**
       * New identity has been set for an asset. \[asset_id, name\]
       **/
      ProfileSet: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, Bytes, bool]>;
      /**
       * Some account `who` was frozen. \[asset_id, who]\
       **/
      Thawed: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * Some assets were transferred. \[asset_id, owner, total_supply\]
       **/
      Transferred: AugmentedEvent<ApiType, [BholdusPrimitivesCurrencyCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [u128]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [u128]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [u32]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [u128]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
