// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed } from '@polkadot/types';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name UlasRuntimeOpaqueSessionKeys */
export interface UlasRuntimeOpaqueSessionKeys extends Struct {
  readonly grandpa: AccountId;
  readonly aura: AccountId;
  readonly imOnline: AccountId;
  readonly authorityDiscovery: AccountId;
  readonly beefy: U8aFixed;
}

/** @name UlasRuntimeProxyType */
export interface UlasRuntimeProxyType extends ProxyType {}

export type PHANTOM_ULASRUNTIME = 'ulasRuntime';
