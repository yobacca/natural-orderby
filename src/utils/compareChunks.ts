import { compareNumbers } from './compareNumbers';
import { compareUnicode } from './compareUnicode';
import { RE_UNICODE_CHARACTERS } from './regex';
import { stringCompare } from './stringCompare';
import type { ChunkMaps } from '../types';

export const compareChunks = (
  chunksA: ChunkMaps,
  chunksB: ChunkMaps,
  locale = 'en',
): number => {
  const lengthA = chunksA.length;
  const lengthB = chunksB.length;
  const size = Math.min(lengthA, lengthB);
  for (let i = 0; i < size; i++) {
    const chunkA = chunksA[i];
    const chunkB = chunksB[i];
    if (chunkA.normalizedString !== chunkB.normalizedString) {
      if (
        (chunkA.normalizedString === '') !==
        (chunkB.normalizedString === '')
      ) {
        // empty strings have lowest value
        return chunkA.normalizedString === '' ? -1 : 1;
      }
      if (
        chunkA.parsedNumber !== undefined &&
        chunkB.parsedNumber !== undefined
      ) {
        // compare numbers
        const result = compareNumbers(chunkA.parsedNumber, chunkB.parsedNumber);
        if (result === 0) {
          // compare string value, if parsed numbers are equal
          // Example:
          // chunkA = { parsedNumber: 1, normalizedString: "001" }
          // chunkB = { parsedNumber: 1, normalizedString: "01" }
          // chunkA.parsedNumber === chunkB.parsedNumber
          // chunkA.normalizedString < chunkB.normalizedString
          return stringCompare(
            chunkA.normalizedString,
            chunkB.normalizedString,
          );
        }
        return result;
      } else if (
        chunkA.parsedNumber !== undefined ||
        chunkB.parsedNumber !== undefined
      ) {
        // number < string
        return chunkA.parsedNumber !== undefined ? -1 : 1;
      } else if (
        RE_UNICODE_CHARACTERS.test(
          chunkA.normalizedString + chunkB.normalizedString,
        )
      ) {
        // use locale comparison only if one of the chunks contains unicode characters
        return compareUnicode(
          chunkA.normalizedString,
          chunkB.normalizedString,
          locale,
        );
      } else {
        // use common string comparison for performance reason
        return stringCompare(chunkA.normalizedString, chunkB.normalizedString);
      }
    }
  }
  // if the chunks are equal so far, the one which has more chunks is greater than the other one
  if (lengthA > size || lengthB > size) {
    return lengthA <= size ? -1 : 1;
  }
  return 0;
};
