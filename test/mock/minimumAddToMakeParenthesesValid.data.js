export const inputData = {
  case1: '())',
  case2: '(((',
  case3: '()',
  case4: '()))((',
  case5: '((())'
};

export const expected = { case1: 1, case2: 3, case3: 0, case4: 4, case5: 1 };
