// @flow
import type { Chunks } from '../types';
import createChunks from './createChunks';
import normalizeChunk from './normalizeChunk';

const createChunksList = (value: string): Chunks => {
  const chunks = createChunks(value).map((chunk, index, array) =>
    normalizeChunk(chunk, array.length)
  );
  return chunks;
};

export default createChunksList;
