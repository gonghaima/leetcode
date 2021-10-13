import TreeNode from '../../../src/models/treeNode';
//case 1
let three1 = new TreeNode(3);
let three2 = new TreeNode(4);
let three3 = new TreeNode(4);
let three4 = new TreeNode(3);

const two1 = new TreeNode(2);
const two2 = new TreeNode(2);
two1.left = three1;
two1.right = three2;
two2.left = three3;
two2.right = three4;

const rootN = new TreeNode(1);
rootN.left = two1;
rootN.right = two2;

//case 2
let c2Three1 = new TreeNode(3);
let c2Three2 = new TreeNode(3);

const c2Two1 = new TreeNode(2);
const c2Two2 = new TreeNode(2);
c2Two1.right = c2Three1;
c2Two2.right = c2Three2;

const c2RootN = new TreeNode(1);
c2RootN.left = c2Two1;
c2RootN.right = c2Two2;

export const inputData = {
  case1: rootN,
  case2: c2RootN
};

export const expected = {
  case1: true,
  case2: false
};
