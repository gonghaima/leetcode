export const inputData = {
  case1: { s: "abcd", t: "bcdf", maxCost: 3 },
  case2: { s: "abcd", t: "cdef", maxCost: 3 },
  case3: { s: "abcd", t: "acde", maxCost: 0 },
  case4: { s: "krrgw", t: "zjxss", maxCost: 19 },
};

export const expected = {
  case1: 3,
  case2: 1,
  case3: 1,
  case4: 2,
};
