import { RE_LEADING_OR_TRAILING_WHITESPACES, RE_WHITESPACES } from './regex';
import type { Chunk } from '../types';

export const normalizeAlphaChunk = (chunk: Chunk): string => {
  return chunk
    .replace(RE_WHITESPACES, ' ')
    .replace(RE_LEADING_OR_TRAILING_WHITESPACES, '');
};
