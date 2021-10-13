export const wiggle_inputData = {
  case1: [1, 7, 4, 9, 2, 5],
  case2: [1, 17, 5, 10, 13, 15, 10, 5, 16, 8],
  case3: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

export const wiggle_expected = {
  case1: true,
  case2: false,
  case3: false
};

export const sub_comb_inputData = {
  case1: { data: [1, 7, 4, 9, 2, 5], lt: 5 }
};

export const sub_comb_expected = {
  case1: [[1, 7, 4, 9, 2], [7, 4, 9, 2, 5]]
};

export const inputData = {
  case1: [1, 7, 4, 9, 2, 5],
  case2: [1, 17, 5, 10, 13, 15, 10, 5, 16, 8],
  case3: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

export const expected = {
  case1: 6,
  case2: 7,
  case3: 2
};
