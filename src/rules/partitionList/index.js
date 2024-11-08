function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let before = new ListNode(0),
    beforeHead = before,
    after = new ListNode(0),
    afterHead = after;

  while (head) {
    if (head.val < x) before = before.next = head;
    else after = after.next = head;
    head = head.next;
  }

  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
};

export default partition;
