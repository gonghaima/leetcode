//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesII = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy; // the last known distinct node
  while (node.next) {
    if (node.next.next && node.next.val === node.next.next.val) {
      // if the next two nodes are equal...
      let nonValNode = node.next.next.next;
      while (nonValNode && nonValNode.val === node.next.val) {
        // ...find the first one that isn't...
        nonValNode = nonValNode.next;
      }
      node.next = nonValNode; // ...and glue it to the last known distinct node;...
    } else {
      node = node.next; // ...otherwise the next node is distinct
    }
  }
  return dummy.next;
};

export default deleteDuplicatesII;
