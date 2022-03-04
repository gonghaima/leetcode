export const inputData = {
  case1: { s1: 'aabcc', s2: 'dbbca', s3: 'aadbbcbcac' },
  case2: { s1: 'aabcc', s2: 'dbbca', s3: 'aadbbbaccc' },
  case3: { s1: '', s2: '', s3: '' },
};

export const expected = {
  case1: true,
  case2: false,
  case3: true,
};
