// @flow
const RE_NUMBERS = /(^0x[\da-fA-F]+$|^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?!\.\d+)(?=\D|\s|$))|\d+)/g;
const RE_LEADING_OR_TRAILING_WHITESPACES = /^\s+|\s+$/g; // trim pre-post whitespace
const RE_WHITESPACES = /\s+/g; // normalize all whitespace to single ' ' character
const RE_INT_OR_FLOAT = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/; // identify integers and floats
const RE_DATE = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/; // identify date strings
const RE_LEADING_ZERO = /^0+[1-9]+$/;
const RE_UNICODE_CHARACTERS = /[^\x00-\x80]/;

export {
  RE_NUMBERS,
  RE_LEADING_OR_TRAILING_WHITESPACES,
  RE_WHITESPACES,
  RE_INT_OR_FLOAT,
  RE_DATE,
  RE_LEADING_ZERO,
  RE_UNICODE_CHARACTERS,
};
