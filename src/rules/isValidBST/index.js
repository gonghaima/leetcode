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
  const queue = [[root, -Infinity, Infinity]];

  while (queue.length > 0) {
    const [node, min, max] = queue.shift();

    if (!node) continue;
    if (node.val >= max || node.val <= min) return false;

    queue.push([node.left, min, node.val]);
    queue.push([node.right, node.val, max]);
  }

  return true;
};

export default isValidBST;
