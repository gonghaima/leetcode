export const inputData = {
  case1: "42",
  case2: "   -42",
  case3: "4193 with words",
  case4: "words and 987",
  case5: "-91283472332",
  case6: "3.14159",
  case7: "-",
  case8: "+1",
  case9: "-abc"
};

export const expected = {
  case1: 42,
  case2: -42,
  case3: 4193,
  case4: 0,
  case5: -2147483648,
  case6: 3,
  case7: 0,
  case8: 1,
  case9: 0
};
