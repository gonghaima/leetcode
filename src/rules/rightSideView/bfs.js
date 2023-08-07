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
  if (!root) return [];

  let queue = [root];
  const result = [root.val];

  while (queue.length) {
    const next = [];

    for (let node of queue) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    if (next.length) result.push(next[next.length - 1].val);
    queue = next;
  }
  return result;
};
export default rightSideView;
