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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let n = 0;
  let res;
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (n++ < k) res = root.val;
    inorder(root.right);
  };
  inorder(root);
  return res;
};

export default kthSmallest;
