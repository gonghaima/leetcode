export const inputData = {
  case1: '3[a]2[bc]',
  case2: '3[a2[c]]',
  case3: '2[abc]3[cd]ef',
};

export const expected = {
  case1: 'aaabcbc',
  case2: 'accaccacc',
  case3: 'abcabccdcdcdef',
};
