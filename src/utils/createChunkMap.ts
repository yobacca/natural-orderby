import type { Chunk, Chunks, ChunkMap } from '../types';
import { normalizeAlphaChunk } from './normalizeAlphaChunk';
import { normalizeNumericChunk } from './normalizeNumericChunk';

export const createChunkMap = (
  chunk: Chunk,
  index: number,
  chunks: Chunks
): ChunkMap => ({
  parsedNumber: normalizeNumericChunk(chunk, index, chunks),
  normalizedString: normalizeAlphaChunk(chunk),
});
