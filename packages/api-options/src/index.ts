// Copyright 2017-2020 @darwinia/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import jsonrpc from '@bholdus/types/interfaces/jsonrpc';
import { typesBundle } from '@bholdus/types/mix';

// import { derive as darwiniaDerive } from '@darwinia/api-derive';
import { ApiOptions } from '@polkadot/api/types';

export const ZERO_OPTIONS: ApiOptions = {
  derives: {},
  rpc: {},
  types: {},
};

export const getApiOptions = ({ derives, rpc, types, ...customApiOptions }: ApiOptions = ZERO_OPTIONS): ApiOptions => ({
  derives: {
    // ...darwiniaDerive,
    ...derives,
  },
  rpc: {
    ...jsonrpc,
    ...rpc,
  },
  types: {
    ...types,
  },
  typesBundle: {
    ...typesBundle,
  },
  ...customApiOptions,
});
