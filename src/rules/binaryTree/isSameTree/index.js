/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p && q) {
    // Both p and q are non-empty
    // Check equality on both subtree
    return (
      p.val == q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  } else {
    // At least one of them is empty
    // Check whether both p and q are empty or not
    return p == q;
  }
};

export default isSameTree;
