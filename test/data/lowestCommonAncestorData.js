import { createTree } from '../../src/models/treeNode';

/* Creating a tree from an array. */
const case1Tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const case3Tree = createTree([1, 2]);

export const inputData = {
  case1: { root: case1Tree, p: case1Tree.left, q: case1Tree.right },
  case2: {
    root: case1Tree,
    p: case1Tree.left,
    q: case1Tree.left.right.right,
  },
  case3: { root: case3Tree, p: case3Tree, q: case3Tree.left },
};

export const expected = {
  case1: case1Tree,
  case2: case1Tree.left,
  case3: case3Tree,
};
