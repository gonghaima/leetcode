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

/** case 3 start */
const c31 = null;
const c32 = null;
/** case 3 end */

/** case 4 start */
//a
const c41 = new TreeNode(1);

const c41R = new TreeNode(1);
c41.right = c41R;

//b
const c42 = new TreeNode(1);

const c42R = new TreeNode(1);
c42.right = c42R;
/** case 4 end */

/** case 5 start */
//a
const c51 = new TreeNode(null);

//b
const c52 = new TreeNode(0);
/** case 5 end */

/** case 6 start */
//a
const c61 = null;

//b
const c62 = new TreeNode(0);
/** case 6 end */

export const inputData = {
  case1: { a: rootN, b: c1RootN1 },
  case2: { a: c2RootN1, b: c2RootN2 },
  case3: { a: c31, b: c32 },
  case4: { a: c41, b: c42 },
  case5: { a: c51, b: c52 },
  case6: { a: c61, b: c62 }
};

export const expected = {
  case1: true,
  case2: false,
  case3: true,
  case4: true,
  case5: false,
  case6: false
};
