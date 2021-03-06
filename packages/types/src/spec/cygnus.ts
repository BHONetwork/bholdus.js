// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default versioned;
