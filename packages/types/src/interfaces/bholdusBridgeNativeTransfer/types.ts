// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, u16 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name BholdusBridgeNativeTransferOutboundTransferInfo */
export interface BholdusBridgeNativeTransferOutboundTransferInfo extends Struct {
  readonly from: AccountId;
  readonly to: Bytes;
  readonly amount: Balance;
  readonly target_chain: u16;
  readonly service_fee: Balance;
}

export type PHANTOM_BHOLDUSBRIDGENATIVETRANSFER = 'bholdusBridgeNativeTransfer';
