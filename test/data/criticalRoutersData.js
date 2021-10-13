export const inputData = {
  case1: {
    numRouters: 7,
    numLinks: 7,
    links: [[1, 2], [1, 3], [2, 4], [3, 6], [6, 7], [4, 5]]
  },
  case2: {
    numRouters: 6,
    numLinks: 5,
    links: [[1, 2], [2, 3], [3, 4], [4, 5], [6, 3]]
  },
  case3: {
    numRouters: 10,
    numLinks: 13,
    links: [[1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [5, 7], [6, 7], [7, 8], [8, 9], [8, 10], [9, 10]]
  }
};

export const expected = {
  case1: [3, 4, 6],
  case2: [2, 3, 4],
  case3: [3, 4, 7, 8]
};
