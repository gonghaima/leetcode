export const inputData = {
  case1: ["a==b", "b!=a"],
  case2: ["b==a", "a==b"],
  case3: ["a==b", "b==c", "a==c"],
  case4: ["a==b", "b!=c", "c==a"],
  case5: ["c==c", "b==d", "x!=z"]
};

export const expected = {
  case1: false,
  case2: true,
  case3: true,
  case4: false,
  case5: true,
};
