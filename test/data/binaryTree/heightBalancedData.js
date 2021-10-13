import TreeNode from "../../../src/models/treeNode";
/** case 1 start */
//level 2
let c1twol = new TreeNode(15);
let c1twor = new TreeNode(7);

//level 1
const c1onel = new TreeNode(9);
const c1oner = new TreeNode(20);
c1oner.left = c1twol;
c1oner.right = c1twor;

//level 0
const c1Root = new TreeNode(3);
c1Root.left = c1onel;
c1Root.right = c1oner;
/** case 1 end */

/** case 2 start */
//level 3
let c2threel = new TreeNode(4);
let c2threer = new TreeNode(4);

//level 2
let c2twol = new TreeNode(3);
let c2twor = new TreeNode(3);
c2twol.left = c2threel;
c2twol.right = c2threer;

//level 1
const c2onel = new TreeNode(2);
const c2oner = new TreeNode(2);
c2onel.left = c2twol;
c2onel.right = c2twor;

//level 0
const c2Root = new TreeNode(1);
c2Root.left = c2onel;
c2Root.right = c2oner;
/** case 2 end */

export const inputData = { case1: c1Root, case2: c2Root };

export const expected = {
  case1: true,
  case2: false
};
