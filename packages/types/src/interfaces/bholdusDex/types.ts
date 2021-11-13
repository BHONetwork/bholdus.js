// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

/** @name BholdusDexTradingPairStatus */
export interface BholdusDexTradingPairStatus extends TradingPairStatus {}

/** @name ProvisioningParameters */
export interface ProvisioningParameters extends Struct {
  readonly minimum_contribution: ITuple<[Balance, Balance]>;
  readonly target_contribution: ITuple<[Balance, Balance]>;
  readonly accumulated_contribution: ITuple<[Balance, Balance]>;
}

/** @name TradingPairStatus */
export interface TradingPairStatus extends Enum {
  readonly isDisabled: boolean;
  readonly isEnabled: boolean;
  readonly isProvisioning: boolean;
  readonly asProvisioning: ProvisioningParameters;
}

export type PHANTOM_BHOLDUSDEX = 'bholdusDex';
