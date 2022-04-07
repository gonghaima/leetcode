export const inputData = {
  case1: { words: ['i', 'love', 'leetcode', 'i', 'love', 'coding'], k: 2 },
  case2: {
    words: [
      'the',
      'day',
      'is',
      'sunny',
      'the',
      'the',
      'the',
      'sunny',
      'is',
      'is',
    ],
    k: 4,
  },
};

export const expected = {
  case1: ['i', 'love'],
  case2: ['the', 'is', 'sunny', 'day'],
};
