export const inputData = {
  case1: { s : "1000", k : 10000 },
  case2: { s : "1000", k : 10},
  case3: { s : "1317", k : 2000},
  case4: { s : "2020", k : 30},
  case5: { s : "1234567890", k : 90 }
};

export const expected = {
  case1: 1,
  case2: 0,
  case3: 8,
  case4: 1,
  case5: 34
};