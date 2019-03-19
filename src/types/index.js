// @flow
export type CompareFn = (valueA: mixed, valueB: mixed) => number;

export type OrderEnum = 'asc' | 'desc';

export type Order = OrderEnum | CompareFn;

export type CompareOptions =
  | {|
      order?: OrderEnum,
    |}
  | OrderEnum
  | void;

export type BaseCompareOptions = {|
  order: Order,
|};

export type IdentifierFn<T> = (value: T) => mixed;

export type Identifier<T> = IdentifierFn<T> | string;

export type ParsedNumber = number;

export type Chunk = string;

export type Chunks = $ReadOnlyArray<Chunk>;

export type ChunkMap = {
  parsedNumber?: number,
  normalizedString: string,
};

export type ChunkMaps = $ReadOnlyArray<ChunkMap>;

export type MappedValueRecord = {|
  parsedNumber?: ParsedNumber,
  chunks?: ChunkMaps,
  isArray?: boolean,
  isFunction?: boolean,
  isNaN?: boolean,
  isNull?: boolean,
  isObject?: boolean,
  isSymbol?: boolean,
  isUndefined?: boolean,
  value: mixed,
|};

type MappedValues = $ReadOnlyArray<MappedValueRecord>;

export type MappedRecord = {|
  index: number,
  values: MappedValues,
|};

export type MappedCollection = Array<MappedRecord>;
