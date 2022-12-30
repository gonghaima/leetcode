import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: createTree([1, 2, 3]),
  case2: createTree([-10, 9, 20, null, null, 15, 7]),
};

export const expected = {
  case1: 6,
  case2: 42,
};
