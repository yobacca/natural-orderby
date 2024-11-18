export type CompareFn = (valueA: unknown, valueB: unknown) => number;

export type OrderEnum = 'asc' | 'desc';

export type Order = OrderEnum | CompareFn;

export type CompareOptions =
  | {
      order?: OrderEnum;
      locale?: Locale;
    }
  | OrderEnum
  | undefined;

export type BaseCompareOptions = {
  order: Order;
  locale: Locale;
};

export type Locale = string;

export type IdentifierFn<T> = (value: T) => unknown;

export type Identifier<T> = IdentifierFn<T> | keyof T | number;

export type ParsedNumber = number;

export type Chunk = string;

export type Chunks = ReadonlyArray<Chunk>;

export type ChunkMap = {
  parsedNumber?: number;
  normalizedString: string;
};

export type ChunkMaps = ReadonlyArray<ChunkMap>;

export type MappedValueRecord = {
  parsedNumber?: ParsedNumber;
  chunks?: ChunkMaps;
  isArray?: boolean;
  isFunction?: boolean;
  isNaN?: boolean;
  isNull?: boolean;
  isObject?: boolean;
  isSymbol?: boolean;
  isUndefined?: boolean;
  value: unknown;
};

type MappedValues = ReadonlyArray<MappedValueRecord>;

export type MappedRecord = {
  index: number;
  values: MappedValues;
};

export type MappedCollection = Array<MappedRecord>;
