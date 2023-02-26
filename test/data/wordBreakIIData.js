export const inputData = {
  case1: { s: 'catsanddog', wordDict: ['cat', 'cats', 'and', 'sand', 'dog'] },
  case2: {
    s: 'pineapplepenapple',
    wordDict: ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
  },
  case3: { s: 'catsandog', wordDict: ['cats', 'dog', 'sand', 'and', 'cat'] },
};

export const expected = {
  case1: ['cats and dog', 'cat sand dog'],
  case2: ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'],
  case3: [],
};
