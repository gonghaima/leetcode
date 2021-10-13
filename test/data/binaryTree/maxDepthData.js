import TreeNode from '../../../src/models/treeNode';
//case 1
let three1 = new TreeNode(15);
let three2 = new TreeNode(7);

const two1 = new TreeNode(9);
const two2 = new TreeNode(20);
two2.left = three1;
two2.right = three2;

const rootN = new TreeNode(3);
rootN.left = two1;
rootN.right = two2;

//case 2
let rootNull = null;

export const inputData = {
  case1: rootN,
  case2: rootNull
};

export const expected = {
  case1: 3,
  case2: 0
};
