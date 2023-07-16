import { createTree } from '../../src/models/treeNode';

export const inputData = {
  case1: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] },
  case2: { preorder: [-1], inorder: [-1] },
};

export const expected = {
  case1: createTree([3, 9, 20, null, null, 15, 7]),
  case2: createTree([-1]),
};
