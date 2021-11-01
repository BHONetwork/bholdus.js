# How to use bholdus.js



```javascript
import getApiOptions from '@bholdus/api-options';
import { ApiPromise } from '@polkadot/api';

// Augment '@polkadot-js/types' typescript definitions with bholdus typescript definitions.
// Now '@polkadot/api' contains bholdus typescript definitions that enables intellisense.
import '@bholdus/types';

// Typescript interfaces of bholdus custom types
import { BscPrimitivesBscHeader } from '@bholdus/types/interfaces';

async function start(){
   const api = await ApiPromise.create(getApiOptions());
   
   const bscHeader: BscPrimitivesBscHeader = api.createType('BscPrimitivesBscHeader',{...});
}

```
