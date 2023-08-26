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
  let vals = [];
  const dfs = (node) => {
    if (vals.length != k) {
      if (node.left) dfs(node.left); //go left first
      vals.push(node.val);
      if (node.right) dfs(node.right); //if have right, go there and repeat process
    }
  };
  dfs(root);

  return vals[k - 1];
};

export default kthSmallest;
