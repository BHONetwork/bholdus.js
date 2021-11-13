// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Struct, u64 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name NftClassData */
export interface NftClassData extends Struct {
  readonly attributes: BTreeMap<Bytes, Bytes>;
}

/** @name NftTokenData */
export interface NftTokenData extends Struct {
  readonly attributes: BTreeMap<Bytes, Bytes>;
}

/** @name SupportNftClassInfo */
export interface SupportNftClassInfo extends Struct {
  readonly totalIssuance: u64;
  readonly owner: AccountId;
  readonly data: NftClassData;
}

/** @name SupportNftTokenInfo */
export interface SupportNftTokenInfo extends Struct {
  readonly metadata: Bytes;
  readonly owner: AccountId;
  readonly data: NftTokenData;
}

export type PHANTOM_BHOLDUSNFT = 'bholdusNft';
