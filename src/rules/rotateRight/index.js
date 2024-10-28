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
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;
  let newTail = head;
  let tail = head;
  let len = 1;
  // get current tail node and length of linked list
  while (tail.next) {
    tail = tail.next;
    ++len;
  }
  // link current tail to head
  tail.next = head;
  // get the new tail node
  for (let i = 1; i < len - (k % len); ++i) {
    newTail = newTail.next;
  }
  const ret = newTail.next;
  // change it into the real tail
  newTail.next = null;
  return ret;
};

export default rotateRight;
