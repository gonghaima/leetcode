export const inputData = {
  case1: "()())()",
  case2: "(a)())()",
  case3: ")(",
};

export const expected = {
  case1: ["(())()","()()()"],
  case2: ["(a())()","(a)()()"],
  case3: [""],
};
