// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, U256, u64 } from '@polkadot/types';
import type { Address, H2048, H256 } from '@polkadot/types/interfaces/runtime';

/** @name BscPrimitivesBscHeader */
export interface BscPrimitivesBscHeader extends Struct {
  readonly parent_hash: H256;
  readonly uncle_hash: H256;
  readonly coinbase: Address;
  readonly state_root: H256;
  readonly transactions_root: H256;
  readonly receipts_root: H256;
  readonly log_bloom: H2048;
  readonly difficulty: U256;
  readonly number: u64;
  readonly gas_limit: U256;
  readonly gas_used: U256;
  readonly timestamp: u64;
  readonly extra_data: Bytes;
  readonly mix_digest: H256;
  readonly nonce: Bytes;
}

export type PHANTOM_BSCPRIMITIVES = 'bscPrimitives';
