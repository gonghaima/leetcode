import TreeNode from "../../../src/models/treeNode";
/** case 1 start */
//a
const two1 = new TreeNode(2);
const two2 = new TreeNode(3);

const rootN = new TreeNode(1);
rootN.left = two1;
rootN.right = two2;

//b
const c1Two1 = new TreeNode(2);
const c1Two2 = new TreeNode(3);

const c1RootN1 = new TreeNode(1);
c1RootN1.left = c1Two1;
c1RootN1.right = c1Two2;
/** case 1 end */

/** case 2 start */
//a
const c2Two1 = new TreeNode(2);

const c2RootN1 = new TreeNode(1);
c2RootN1.left = c2Two1;

//b
const c2Two2 = new TreeNode(2);

const c2RootN2 = new TreeNode(1);
c2RootN2.right = c2Two2;
/** case 2 end */

export const inputData = {
  case1: { a: rootN, b: c1RootN1 },
  case2: { a: c2RootN1, b: c2RootN2 }
};

export const expected = {
  case1: true,
  case2: false
};
