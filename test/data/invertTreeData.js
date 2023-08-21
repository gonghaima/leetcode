import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: createTree([4, 2, 7, 1, 3, 6, 9]),
  case2: createTree([2, 1, 3]),
  case3: createTree([]),
};

export const expected = {
  case1: createTree([4, 7, 2, 9, 6, 3, 1]),
  case2: createTree([2, 3, 1]),
  case3: createTree([]),
};
