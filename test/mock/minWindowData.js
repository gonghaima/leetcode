export const inputData = {
  case1: { s: "ADOBECODEBANC", t: "ABC" },
  case2: { s: "a", t: "a" },
  case3: { s: "a", t: "aa" },
  case4: { s: "aa", t: "aa" },
};

export const expected = {
  case1: "BANC",
  case2: "a",
  case3: "",
  case4: "aa",
};
