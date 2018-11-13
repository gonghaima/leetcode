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
let c2Three1 = new TreeNode(15);
let c2Three2 = new TreeNode(7);

const c2Two1 = new TreeNode(9);
const c2Two2 = new TreeNode(20);
c2Two2.left = c2Three1;
c2Two2.right = c2Three2;

const c2RootN = new TreeNode(0);
c2RootN.left = c2Two1;
c2RootN.right = c2Two2;

export const inputData = {
  case1: rootN,
  case2: c2RootN
};

export const expected = {
  case1: [[3], [9, 20], [15, 7]],
  case2: [[0], [9, 20], [15, 7]]
};
