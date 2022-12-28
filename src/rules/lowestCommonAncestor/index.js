/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  const pSet = new Set();
  const qSet = new Set();
  pSet.add(p);
  qSet.add(q);

  function callDFS(node) {
    if (!node) return null;
    if (pSet.has(node) || qSet.has(node)) return node;

    const left = callDFS(node.left);
    const right = callDFS(node.right);

    if (
      (pSet.has(left) && qSet.has(right)) ||
      (pSet.has(right) && qSet.has(left))
    )
      return node;

    return left || right;
  }
  return callDFS(root);
};
export default lowestCommonAncestor;
