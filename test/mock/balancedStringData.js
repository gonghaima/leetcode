export const inputData = {
  case1: "QWER",
  case2: "QQWE",
  case3: "QQQW",
  case4: "QQQQ",
  case5: "RQQERWEWWREQEQWR",
  case6: "RQRERREWEEWWQWRRRWQQEQQQ",
  case7: "WWQQRRRRQRQQ",
  case8: "WWEQERQWQWWRWWERQWEQ"
};

export const expected = {
  case1: 0,
  case2: 1,
  case3: 2,
  case4: 3,
  case5: 0,
  case6: 2,
  case7: 4,
  case8: 4
};
