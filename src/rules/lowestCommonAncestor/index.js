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
  // If p or q is found, return it back up the stack.
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q); // Return first instance of p or q in left subtree
  var resR = lowestCommonAncestor(root.right, p, q); // Return first instance of p or q in right subtree

  // If we found p in left and q in right, the node we are currently at is LCA. If we found one of them, the one we found is LCA.
  return resL && resR ? root : resL || resR;
};
export default lowestCommonAncestor;
