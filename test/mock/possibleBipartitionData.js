export const inputData = {
  case1: { N: 4, dislikes: [[1, 2], [1, 3], [2, 4]] },
  case2: { N: 3, dislikes: [[1, 2], [1, 3], [2, 3]] },
  case3: { N: 5, dislikes: [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]] }
};

export const expected = {
  case1: true,
  case2: false,
  case3: false
};
