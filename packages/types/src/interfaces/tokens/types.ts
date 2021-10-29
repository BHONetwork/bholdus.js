// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId } from '@bholdus/types/interfaces/primitives';
import type { Data, Struct, Vec, bool, u128 } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

/** @name Approval */
export interface Approval extends Struct {
  readonly amount: Balance;
  readonly deposit: Balance;
}

/** @name AssetBalance */
export interface AssetBalance extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly is_frozen: bool;
  readonly sufficient: bool;
  readonly extra: ITuple<[]>;
}

/** @name AssetId */
export interface AssetId extends CurrencyId {}

/** @name AssetIdentity */
export interface AssetIdentity extends Struct {
  readonly additional: Vec<ITuple<[Data, Data]>>;
  readonly basic_information: BasicInformation;
  readonly social_profiles: SocialProfile;
}

/** @name BasicInformation */
export interface BasicInformation extends Struct {
  readonly project_name: Data;
  readonly official_project_website: Data;
  readonly official_email_address: Data;
  readonly logo_icon: Data;
  readonly project_sector: Data;
  readonly project_description: Data;
}

/** @name SocialProfile */
export interface SocialProfile extends Struct {
  readonly whitepaper: Data;
  readonly medium: Data;
  readonly github: Data;
  readonly reddit: Data;
  readonly telegram: Data;
  readonly discord: Data;
  readonly slack: Data;
  readonly facebook: Data;
  readonly linkedin: Data;
  readonly twitter: Data;
}

/** @name TAssetBalance */
export interface TAssetBalance extends u128 {}

export type PHANTOM_TOKENS = 'tokens';
