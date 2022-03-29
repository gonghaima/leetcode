export const inputData = {
  case1: [
    ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'],
    [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
  ],
};

export const expected = {
  case1: [null, null, true, false, true, null, true],
};
