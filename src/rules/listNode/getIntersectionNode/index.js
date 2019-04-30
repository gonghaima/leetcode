import ListNode from "../../../models/listNode";
export default (headA, headB) => {
  if (!headA || !headB) return null;
  var p1 = headA;
  var p2 = headB;
  while (p1 && p2 && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;

    if (p1 == p2) return p1;
    if (!p1) p1 = headB;
    if (!p2) p2 = headA;
  }
  return p1;
};
