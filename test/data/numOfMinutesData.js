export const inputData = {
  case1: { n: 1, headID: 0, manager: [-1], informTime: [0] },
  case2: { n: 6, headID: 2, manager: [2, 2, -1, 2, 2, 2], informTime: [0, 0, 1, 0, 0, 0] },
  case3: { n: 7, headID: 6, manager: [1, 2, 3, 4, 5, 6, -1], informTime: [0, 6, 5, 4, 3, 2, 1] },
  case4: { n: 15, headID: 0, manager: [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], informTime: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
  case5: { n: 4, headID: 2, manager: [3, 3, -1, 2], informTime: [0, 0, 162, 914] }
};

export const expected = {
  case1: 0,
  case2: 1,
  case3: 21,
  case4: 3,
  case5: 1076
};