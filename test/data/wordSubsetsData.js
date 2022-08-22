export const inputData = {
  case1: {
    words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    words2: ['e', 'o'],
  },
  case2: {
    words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    words2: ['l', 'e'],
  },
};

export const expected = {
  case1: ['facebook', 'google', 'leetcode'],
  case2: ['apple', 'google', 'leetcode'],
};
