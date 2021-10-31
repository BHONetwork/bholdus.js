// Copyright 2017-2021 authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable sort-keys */

import { OverrideBundleDefinition, OverrideVersionedType, RegistryTypes } from '@polkadot/types/types';

import bholdusPrimitives from '../interfaces/bholdusPrimitives/definitions';
import bholdusRuntime from '../interfaces/bholdusRuntime/definitions';
import chainbridge from '../interfaces/chainbridge/definitions';
import currencies from '../interfaces/currencies/definitions';
import dex from '../interfaces/dex/definitions';
import tokens from '../interfaces/tokens/definitions';
import typesSpec from '../spec';
import { jsonrpcFromDefinitions, typesFromDefinitions } from './utils';

type SpecOverrideBundleDefinition = {
  spec: Record<string, OverrideBundleDefinition>;
};

const definitions = {
  chainbridge,
  currencies,
  dex,
  bholdusPrimitives,
  tokens,
  bholdusRuntime
};

export const types: RegistryTypes = {
  ...typesFromDefinitions(definitions)
};

export const jsonrpc = jsonrpcFromDefinitions(definitions);

// NOTE: The mapping is done from specName in state.getRuntimeVersion
function getBundleFromSpecName (specName: string): OverrideBundleDefinition {
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
          ...version.types
        }
      };
    })
  };
}

export const typesBundle: SpecOverrideBundleDefinition = {
  spec: {
    bholdus: getBundleFromSpecName('bholdus')
  }
};
