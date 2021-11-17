// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name BholdusBridgeNativeTransferOutboundTransferInfo */
export interface BholdusBridgeNativeTransferOutboundTransferInfo extends Struct {
  readonly from: AccountId;
  readonly to: Bytes;
  readonly amount: Balance;
  readonly target_chain: ChainId;
  readonly service_fee: Balance;
}

export type PHANTOM_BHOLDUSBRIDGENATIVETRANSFER = 'bholdusBridgeNativeTransfer';
