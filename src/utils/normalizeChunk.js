// @flow
import type { Chunk, Chunks } from '../types';
import {
  RE_LEADING_OR_TRAILING_WHITESPACES,
  RE_WHITESPACES,
  RE_INT_OR_FLOAT,
  RE_LEADING_ZERO,
  RE_UNICODE_CHARACTERS,
  RE_ASCII_CHARACTERS,
} from './regex';
import parseNumber from './parseNumber';

const normalizeChunk = (
  chunk: string,
  index: number,
  chunks: Chunks
): Chunk => {
  if (RE_INT_OR_FLOAT.test(chunk)) {
    if (!RE_LEADING_ZERO.test(chunk)) {
      return parseNumber(chunk) || 0;
    }
    // only parse a leading number, if it´s not followed by characters
    // to be able to sort filenames prefixed with numbers containing leading zeros
    // e.g. 001filename.txt, 01filename.txt
    if (
      index === 0 &&
      chunks.length > 1 &&
      !RE_UNICODE_CHARACTERS.test(chunks[1].toString()) &&
      !RE_ASCII_CHARACTERS.test(chunks[1].toString())
    ) {
      return parseNumber(chunk) || 0;
    }
    // don´t parse a number, if there´s a preceding decimal point
    // to keep significance
    // e.g. 1.0020, 1.020
    if (index > 0 && chunks[index - 1] !== '.') {
      return parseNumber(chunk) || 0;
    }
  }
  return chunk
    .replace(RE_WHITESPACES, ' ')
    .replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
};

export default normalizeChunk;
