// [object Object]
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

import phoenixSpec from './phoenix';
import cygnusSpec from './cygnus';
import ulasSpec from './ulas';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  phoenix: phoenixSpec,
  cygnus: cygnusSpec,
  ulas: ulasSpec,
};

export default typesSpec;
