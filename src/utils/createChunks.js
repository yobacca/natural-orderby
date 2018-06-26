// @flow
import { RE_NUMBERS } from './regex';

const createChunks = (value: string): Array<string> =>
  value
    .replace(RE_NUMBERS, '\0$1\0')
    .replace(/\0$/, '')
    .replace(/^\0/, '')
    .split('\0');

export default createChunks;
