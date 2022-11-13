import { RE_NUMBERS } from './regex';

export const createChunks = (value: string): Array<string> =>
  value
    .replace(RE_NUMBERS, '\0$1\0')
    .replace(/\0$/, '')
    .replace(/^\0/, '')
    .split('\0');
