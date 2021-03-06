// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Keypair } from '../types';

import { sr25519DeriveKeypairHard } from '@polkadot/wasm-crypto';

import { schnorrkelKeypairFromU8a } from './keypair/fromU8a';
import { schnorrkelKeypairToU8a } from './keypair/toU8a';

export function schnorrkelDeriveHard (keypair: Keypair, chainCode: Uint8Array): Keypair {
  return schnorrkelKeypairFromU8a(
    sr25519DeriveKeypairHard(schnorrkelKeypairToU8a(keypair), chainCode)
  );
}
