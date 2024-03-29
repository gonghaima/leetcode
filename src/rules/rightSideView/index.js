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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let list = [];
  rightView(root, 0, list);
  return list;
};

function rightView(root, depth, list) {
  if (!root) return;
  if (depth == list.length) list.push(root.val);
  rightView(root.right, depth + 1, list);
  rightView(root.left, depth + 1, list);
}
export default rightSideView;
