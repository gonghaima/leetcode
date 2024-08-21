/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  if (list1.val > list2.val) {
    [list1, list2] = [list2, list1];
  }

  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
};

module.exports = mergeTwoLists;
