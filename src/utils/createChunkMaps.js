// @flow
import type { ChunkMaps } from '../types';
import createChunks from './createChunks';
import createChunkMap from './createChunkMap';

const createChunkMaps = (value: string): ChunkMaps => {
  const chunksMaps = createChunks(value).map(createChunkMap);
  return chunksMaps;
};

export default createChunkMaps;
