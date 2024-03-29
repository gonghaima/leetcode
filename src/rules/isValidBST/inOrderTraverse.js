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
  function inOrder(node) {
    if (!node) return [];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)];
  }

  const sortedArr = inOrder(root);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] <= sortedArr[i]) return false;
  }
  return true;
};

export default isValidBST;
