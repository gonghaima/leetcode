export const inputData = {
  case1: [
    'WordDictionary',
    'addWord',
    'addWord',
    'addWord',
    'search',
    'search',
    'search',
    'search',
  ][([], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..'])],
};

export const expected = {
  case1: [null, null, null, null, false, true, true, true],
};
