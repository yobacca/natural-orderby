import { createChunkMap } from './createChunkMap';
import { createChunks } from './createChunks';
import type { ChunkMaps } from '../types';

export const createChunkMaps = (value: string): ChunkMaps => {
  const chunksMaps = createChunks(value).map(createChunkMap);
  return chunksMaps;
};
