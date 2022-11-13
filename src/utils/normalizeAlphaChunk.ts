import type { Chunk } from '../types';
import { RE_LEADING_OR_TRAILING_WHITESPACES, RE_WHITESPACES } from './regex';

export const normalizeAlphaChunk = (chunk: Chunk): string => {
  return chunk
    .replace(RE_WHITESPACES, ' ')
    .replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
};
