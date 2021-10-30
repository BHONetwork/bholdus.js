// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed } from '@polkadot/types';
import type { BeefyId, BeefyNextAuthoritySet } from '@polkadot/types/interfaces/beefy';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name BeefyPrimitivesCryptoPublic */
export interface BeefyPrimitivesCryptoPublic extends BeefyId {}

/** @name BeefyPrimitivesMmrBeefyNextAuthoritySet */
export interface BeefyPrimitivesMmrBeefyNextAuthoritySet extends BeefyNextAuthoritySet {}

/** @name BholdusRuntimeOpaqueSessionKeys */
export interface BholdusRuntimeOpaqueSessionKeys extends Struct {
  readonly grandpa: AccountId;
  readonly aura: AccountId;
  readonly imOnline: AccountId;
  readonly authorityDiscovery: AccountId;
  readonly beefy: U8aFixed;
}

/** @name BholdusRuntimeProxyType */
export interface BholdusRuntimeProxyType extends ProxyType {}

export type PHANTOM_BHOLDUSRUNTIME = 'bholdusRuntime';
