// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hexToU8a } from '@polkadot/util';
import { waitReady } from '@polkadot/wasm-crypto';

import { xxhashAsU8a } from '.';

describe('xxhashAsU8a', (): void => {
  beforeEach(async (): Promise<void> => {
    await waitReady();
  });

  [false, true].forEach((onlyJs): void => {
    it(`returns a 64-bit value by default (onlyJs=${onlyJs.toString()})`, (): void => {
      expect(
        xxhashAsU8a('abc', undefined, onlyJs)
      ).toEqual(
        hexToU8a('0x990977adf52cbc44')
      );
    });
  });

  [false, true].forEach((onlyJs): void => {
    it(`returns a 128-bit value (as specified, onlyJs=${onlyJs.toString()})`, (): void => {
      expect(
        xxhashAsU8a('abc', 128, onlyJs)
      ).toEqual(
        hexToU8a('0x990977adf52cbc440889329981caa9be')
      );
    });
  });

  [false, true].forEach((onlyJs): void => {
    it(`returns a 256-bit value (as specified, onlyJs=${onlyJs.toString()})`, (): void => {
      expect(
        xxhashAsU8a('abc', 256, onlyJs)
      ).toEqual(
        hexToU8a('0x990977adf52cbc440889329981caa9bef7da5770b2b8a05303b75d95360dd62b')
      );
    });
  });
});
