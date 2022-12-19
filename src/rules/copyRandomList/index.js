/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/***********
 * Runtime *
 * 114 ms  *
 * Beats   *
 * 17.39%  *
 * Memory  *
 * 43.6 MB *
 * Beats   *
 * 89.77%  *
 ***********/

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let visited = new Map();

  let helper = (node) => {
    if (!node) return null;
    if (visited.has(node)) return visited.get(node);

    let newNode = new Node(node.val);
    visited.set(node, newNode);
    newNode.next = helper(node.next);
    newNode.random = helper(node.random);
    return newNode;
  };
  return helper(head);
};

export default copyRandomList;
