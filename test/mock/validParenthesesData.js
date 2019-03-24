export const inputData = {
  case1: "()",
  case2: "()[]{}",
  case3: "(]",
  case4: "([)]",
  case5: "{[]}",
  case6: "(([]){})"
};

export const expected = {
  case1: true,
  case2: true,
  case3: false,
  case4: false,
  case5: true,
  case6: true
};
