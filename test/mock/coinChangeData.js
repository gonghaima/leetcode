export const inputData = {
  case1: {coins : [1,2,5], amount : 11},
  case2: {coins : [2], amount : 3},
  case3: {coins : [1], amount : 0},
  case4: {coins : [1], amount : 1},
  case5: {coins : [1], amount : 2},
};

export const expected = {
  case1: 3,
  case2: -1,
  case3: 0,
  case4: 1,
  case5: 2,
};
