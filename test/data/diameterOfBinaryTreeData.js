import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: createTree([1, 2, 3, 4, 5]),
  case2: createTree([1, 2]),
};

export const expected = {
  case1: 3,
  case2: 1,
};
