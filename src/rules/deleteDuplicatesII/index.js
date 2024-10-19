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
  if (!head || !head.next) {
    return head;
  }
  let output = new ListNode(0, head),
    pre = output;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pre.next = head.next;
    } else {
      pre = pre.next;
    }
    head = head.next;
  }
  return output.next;
};

export default deleteDuplicatesII;
