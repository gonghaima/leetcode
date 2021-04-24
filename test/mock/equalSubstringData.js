export const inputData = {
  case1: { s : "abcd", t : "bcdf", maxCost : 3},
  case2: { s : "abcd", t : "cdef", maxCost : 3 },
  case3: { s : "abcd", t : "acde", maxCost : 0},
};

export const expected = {
  case1: 3,
  case2: 1,
  case3: 0,
};
