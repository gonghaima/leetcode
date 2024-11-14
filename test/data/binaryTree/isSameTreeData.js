import { createTree } from '../../../src/models/treeNode';

export const inputData = {
  case1: { p: createTree([1, 2, 3]), q: createTree([1, 2, 3]) },
  case2: { p: createTree([1, 2]), q: createTree([1, null, 2]) },
  case3: { p: createTree([1, 2, 1]), q: createTree([1, 1, 2]) },
};

export const expected = {
  case1: true,
  case2: false,
  case3: false,
};
