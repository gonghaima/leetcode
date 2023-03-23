import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  case2: [
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ],
};

export const expected = {
  case1: 3,
  case2: 4,
};
