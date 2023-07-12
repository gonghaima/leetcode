/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  //compare left with right
  // if not the same return false
  if (root?.left?.val > root.val || root?.right?.val < root.val) {
    return false;
  }

  // otherwise do the isValidBST for both left and right
  if (root?.left?.val) isValidBST(root.left);
  if (root?.right?.val) isValidBST(root.right);

  // return true
  return true;
};
export default isValidBST;
