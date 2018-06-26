// @flow
import type { Chunks } from '../types';
import { RE_UNICODE_CHARACTERS } from './regex';
import compareNumbers from './compareNumbers';
import compareUnicode from './compareUnicode';
import stringCompare from './stringCompare';

const compareChunks = (chunksA: Chunks, chunksB: Chunks): number => {
  const lengthA = chunksA.length;
  const lengthB = chunksB.length;
  const size = Math.min(lengthA, lengthB);
  for (let i = 0; i < size; i++) {
    const chunkA = chunksA[i];
    const chunkB = chunksB[i];
    if (chunkA !== chunkB) {
      if ((chunkA === '') !== (chunkB === '')) {
        // empty strings have lowest value
        return chunkA === '' ? -1 : 1;
      }
      if (typeof chunkA === 'number' && typeof chunkB === 'number') {
        // compare numbers
        return compareNumbers(chunkA, chunkB);
      } else if (typeof chunkA === 'number' || typeof chunkB === 'number') {
        // number < string
        return typeof chunkA === 'number' ? -1 : 1;
      } else if (
        RE_UNICODE_CHARACTERS.test(chunkA + chunkB) &&
        chunkA.localeCompare
      ) {
        // use locale comparison only if one of the chunks contains unicode characters
        return compareUnicode(chunkA, chunkB);
      } else {
        // use common string comparison for performance reason
        return stringCompare(chunkA, chunkB);
      }
    }
  }
  // if the chunks are equal so far, the one which has more chunks is greater than the other one
  if (lengthA > size || lengthB > size) {
    return lengthA <= size ? -1 : 1;
  }
  return 0;
};

export default compareChunks;
