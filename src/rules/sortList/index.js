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

// https://leetcode.com/problems/sort-list/solutions/1419669/fastest-and-simple-javascript-typescript-solution-136ms-100/

// Runtime
/***********
 * 196 ms  *
 * Beats   *
 * 96.52%  *
 * Memory  *
 * 62.9 MB *
 * Beats   *
 * 97.91%  *
 ***********/

var sortList = function(head) {
  let p = head;
  let a = [];
  for (; p; p = p.next) a.push(p);
  a.sort((a, b) => a.val - b.val);

  let head_ = new ListNode();
  p = head_;
  for (const x of a) p = p.next = x;
  p.next = null;
  return head_.next;
};

export default sortList;
