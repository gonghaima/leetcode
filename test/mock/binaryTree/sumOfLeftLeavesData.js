import TreeNode from "../../../src/models/treeNode";
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

export const inputData = {
  case1: rootN
};

export const expected = {
  case1: 24
};
