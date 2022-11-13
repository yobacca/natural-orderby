import type { Chunk, Chunks } from '../types';
import { parseNumber } from './parseNumber';
import { RE_INT_OR_FLOAT, RE_LEADING_ZERO } from './regex';

export const normalizeNumericChunk = (
  chunk: Chunk,
  index: number,
  chunks: Chunks
): number | undefined => {
  if (RE_INT_OR_FLOAT.test(chunk)) {
    // don´t parse a number, if there´s a preceding decimal point
    // to keep significance
    // e.g. 1.0020, 1.020
    if (
      !RE_LEADING_ZERO.test(chunk) ||
      index === 0 ||
      chunks[index - 1] !== '.'
    ) {
      return parseNumber(chunk) || 0;
    }
  }
  return undefined;
};
