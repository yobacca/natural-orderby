import type { ChunkMaps } from '../types';
import { createChunkMap } from './createChunkMap';
import { createChunks } from './createChunks';

export const createChunkMaps = (value: string): ChunkMaps => {
  const chunksMaps = createChunks(value).map(createChunkMap);
  return chunksMaps;
};
