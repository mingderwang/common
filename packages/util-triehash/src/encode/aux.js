// Copyright 2017-2018 @polkadot/util-triehash authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Trie$Pairs } from '../types';

import keccakAsU8a from '@polkadot/util-crypto/keccak/asU8a';
import rlpEncode from '@polkadot/util-rlp/encode';

import encode from './index';

// flowlint-next-line unclear-type:off
export default function encodeAux (pairs: Trie$Pairs, preLength: number): any {
  const encoded = encode(pairs, preLength);
  const rlped = rlpEncode(encoded);

  if (rlped.length <= 31) {
    return encoded;
  }

  return keccakAsU8a(rlped);
}
