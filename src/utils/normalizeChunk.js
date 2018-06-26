// @flow
import type { Chunk } from '../types';
import {
  RE_LEADING_OR_TRAILING_WHITESPACES,
  RE_WHITESPACES,
  RE_INT_OR_FLOAT,
  RE_LEADING_ZERO,
} from './regex';
import parseNumber from './parseNumber';

const normalizeChunk = (chunk: string, chunksLength: number): Chunk => {
  if (
    RE_INT_OR_FLOAT.test(chunk) &&
    (!RE_LEADING_ZERO.test(chunk) || chunksLength === 1)
  ) {
    return parseNumber(chunk) || 0;
  }
  return chunk
    .replace(RE_WHITESPACES, ' ')
    .replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
};

export default normalizeChunk;
