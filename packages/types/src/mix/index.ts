// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable sort-keys */

import { OverrideBundleDefinition, OverrideVersionedType, RegistryTypes } from '@polkadot/types/types';

import bholdusPrimitives from '../interfaces/bholdusPrimitives/definitions';
import bholdusCommon from '../interfaces/bholdusCommon/definitions';
import phoenixRuntime from '../interfaces/phoenixRuntime/definitions';
import cygnusRuntime from '../interfaces/cygnusRuntime/definitions';
import ulasRuntime from '../interfaces/ulasRuntime/definitions';
import bholdusCurrencies from '../interfaces/bholdusCurrencies/definitions';
// import bholdusDex from '../interfaces/bholdusDex/definitions';
import bholdusTokens from '../interfaces/bholdusTokens/definitions';
import bholdusNft from '../interfaces/bholdusNft/definitions';
import bholdusBridgeNativeTransfer from '../interfaces/bholdusBridgeNativeTransfer/definitions';

import typesSpec from '../spec';
import { jsonrpcFromDefinitions, typesFromDefinitions } from './utils';

type SpecOverrideBundleDefinition = {
  spec: Record<string, OverrideBundleDefinition>;
};

const definitions = {
  bholdusCurrencies,
  // bholdusDex,
  bholdusPrimitives,
  bholdusTokens,
  bholdusNft,
  phoenixRuntime,
  cygnusRuntime,
  ulasRuntime,
  bholdusCommon,
  bholdusBridgeNativeTransfer,
};

export const types: RegistryTypes = {
  ...typesFromDefinitions(definitions),
};

export const jsonrpc = jsonrpcFromDefinitions(definitions);

// NOTE: The mapping is done from specName in state.getRuntimeVersion
function getBundleFromSpecName(specName: string): OverrideBundleDefinition {
  return {
    alias: {},
    rpc: jsonrpc,
    types: [...typesSpec[specName]].map((version): OverrideVersionedType => {
      return {
        minmax: version.minmax,
        // eslint-disable-next-line
        // @ts-ignore
        types: {
          ...types,
          ...version.types,
        },
      };
    }),
  };
}

export const typesBundle: SpecOverrideBundleDefinition = {
  spec: {
    phoenix: getBundleFromSpecName('phoenix'),
    cygnus: getBundleFromSpecName('cygnus'),
    ulas: getBundleFromSpecName('ulas'),
  },
};
