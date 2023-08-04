import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: createTree([1, 2, 3, null, 5, null, 4]),
  case2: createTree([1, null, 3]),
  case3: createTree([]),
};

export const expected = {
  case1: [1, 3, 4],
  case2: [1, 3],
  case3: [],
};
