import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: {
    root: createTree([3, 1, 4, null, 2]),
    k: 1,
  },
  case2: { root: createTree([5, 3, 6, 2, 4, null, null, 1]), k: 3 },
};

export const expected = {
  case1: 1,
  case2: 3,
};
