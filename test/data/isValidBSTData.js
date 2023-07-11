import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: createTree([2, 1, 3]),
  case2: createTree([5, 1, 4, null, null, 3, 6]),
};

export const expected = {
  case1: true,
  case2: false,
};
