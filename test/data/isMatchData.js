export const inputData = {
  case1: { s : "aa", p : "a" },
  case2: { s : "aa", p : "*" },
  case3: { s : "cb", p : "?a" },
};

export const expected = {
  case1: false,
  case2: true,
  case3: false,
};
