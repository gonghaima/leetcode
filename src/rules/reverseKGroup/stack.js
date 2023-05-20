/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null;
  var tail = head;
  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

function reverse(curr) {
  var prev = null;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
}

export default reverseKGroup;
