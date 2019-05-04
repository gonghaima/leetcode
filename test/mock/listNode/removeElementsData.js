import ListNode from "../../../src/models/listNode";

/**case 1 start */
//input
const c1n1 = new ListNode(1);
const c1n2 = new ListNode(2);
const c1n3 = new ListNode(6);
const c1n4 = new ListNode(3);
const c1n5 = new ListNode(4);
const c1n6 = new ListNode(5);
const c1n7 = new ListNode(6);

c1n1.next = c1n2;
c1n2.next = c1n3;
c1n3.next = c1n4;
c1n4.next = c1n5;
c1n5.next = c1n6;
c1n6.next = c1n7;

//expected
const c1n1E = new ListNode(1);
const c1n2E = new ListNode(2);
const c1n3E = new ListNode(3);
const c1n4E = new ListNode(4);
const c1n5E = new ListNode(5);

c1n1E.next = c1n2E;
c1n2E.next = c1n3E;
c1n3E.next = c1n4E;
c1n4E.next = c1n5E;
/**case 1 end */

export const inputData = {
  case1: { data: c1n1, val: 6 }
};

export const expected = {
  case1: c1n1E
};
