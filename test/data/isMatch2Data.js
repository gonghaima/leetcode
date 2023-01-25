export const inputData = {
  case1: { s : "aa", p : "a" },
  case2: { s : "aa", p : "a*" },
  case3: { s : "ab", p : ".*" },
};

export const expected = {
  case1: false,
  case2: true,
  case3: true,
};
