import { normalizeAlphaChunk } from './normalizeAlphaChunk';
import { normalizeNumericChunk } from './normalizeNumericChunk';
import type { Chunk, Chunks, ChunkMap } from '../types';

export const createChunkMap = (
  chunk: Chunk,
  index: number,
  chunks: Chunks,
): ChunkMap => ({
  parsedNumber: normalizeNumericChunk(chunk, index, chunks),
  normalizedString: normalizeAlphaChunk(chunk),
});
