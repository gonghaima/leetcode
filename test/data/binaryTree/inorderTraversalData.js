import TreeNode from '../../../src/models/treeNode';
//case 1
let threeN = new TreeNode(3);
const twoN = new TreeNode(2);
twoN.left = threeN;
const rootN = new TreeNode(1);
rootN.right = twoN;

//case 2
let root2left = new TreeNode(1);
let root2right = new TreeNode(2);
const root2 = new TreeNode(3);
root2.left = root2left;
root2.right = root2right;

export const inputData = {
  case1: rootN,
  case2: root2
};

export const expected = {
  case1: [1, 3, 2],
  case2: [1, 3, 2]
};
