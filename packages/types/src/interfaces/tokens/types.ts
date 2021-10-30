// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId } from '@bholdus/types/interfaces/bholdusPrimitives';
import type { Bytes, Compact, Data, Struct, Vec, bool, u32, u8 } from '@polkadot/types';
import type { AccountId, Balance, BalanceOf } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

/** @name AssetId */
export interface AssetId extends CurrencyId {}

/** @name BasicInformation */
export interface BasicInformation extends Struct {
  readonly project_name: Data;
  readonly official_project_website: Data;
  readonly official_email_address: Data;
  readonly logo_icon: Data;
  readonly project_sector: Data;
  readonly project_description: Data;
}

/** @name BholdusTokensApproval */
export interface BholdusTokensApproval extends Struct {
  readonly amount: Balance;
  readonly deposit: Balance;
}

/** @name BholdusTokensAssetBalance */
export interface BholdusTokensAssetBalance extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly is_frozen: bool;
  readonly sufficient: bool;
  readonly extra: ITuple<[]>;
}

/** @name BholdusTokensAssetDetails */
export interface BholdusTokensAssetDetails extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: BalanceOf;
  readonly deposit: BalanceOf;
  readonly minBalance: BalanceOf;
  readonly isSufficient: bool;
  readonly accounts: u32;
  readonly approvals: u32;
  readonly isFrozen: bool;
}

/** @name BholdusTokensAssetIdentity */
export interface BholdusTokensAssetIdentity extends Struct {
  readonly additional: Vec<ITuple<[Data, Data]>>;
  readonly basic_information: BasicInformation;
  readonly social_profiles: SocialProfile;
}

/** @name BholdusTokensAssetMetadata */
export interface BholdusTokensAssetMetadata extends Struct {
  readonly deposit: BalanceOf;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly isFrozen: bool;
}

/** @name BholdusTokensDestroyWitness */
export interface BholdusTokensDestroyWitness extends Struct {
  readonly accounts: Compact<u32>;
  readonly sufficients: Compact<u32>;
  readonly approvals: Compact<u32>;
}

/** @name BholdusTokensRegistration */
export interface BholdusTokensRegistration extends Struct {
  readonly deposit: BalanceOf;
  readonly info: BholdusTokensAssetIdentity;
  readonly isVerifiable: bool;
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

export type PHANTOM_TOKENS = 'tokens';
