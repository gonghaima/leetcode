export const inputData = {
  case1: {
    pattern: 'abba',
    s: 'dog cat cat dog',
  },
  case2: {
    pattern: 'abba',
    s: 'dog cat cat fish',
  },
  case3: {
    pattern: 'aaaa',
    s: 'dog cat cat dog',
  },
};

export const expected = {
  case1: true,
  case2: false,
  case3: false,
};
