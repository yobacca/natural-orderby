// @flow
import type { Chunks } from '../types';
import createChunks from './createChunks';
import normalizeChunk from './normalizeChunk';

const createChunksList = (value: string): Chunks => {
  const chunks = createChunks(value).map(normalizeChunk);
  return chunks;
};

export default createChunksList;
