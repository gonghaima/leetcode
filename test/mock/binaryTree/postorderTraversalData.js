import TreeNode from '../../../src/models/treeNode';
//case 1
let threeN = new TreeNode(3);
const twoN = new TreeNode(2);
twoN.left = threeN;
const rootN = new TreeNode(1);
rootN.right = twoN;


export const inputData = {
  case1: rootN,
};

export const expected = {
  case1: [3, 2, 1]
};
