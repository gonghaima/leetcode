/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var sortList = function(head) {
  if (!head || !head.next) return head;
  let fast = head,
    slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let middle = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(middle));
};

const merge = (o, t) => {
  let d = new ListNode(-1); //dummy and temp
  let tmp = d;
  while (o && t) {
    tmp.next = o.val < t.val ? o : t;
    tmp = tmp.next;
    if (o.val < t.val) o = o.next;
    else t = t.next;
  }
  if (o) tmp.next = o;
  if (t) tmp.next = t;
  return d.next;
};

export default sortList;
