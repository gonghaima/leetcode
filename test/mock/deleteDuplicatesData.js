import ListNode from "../../src/models/listNode";

/**case 1 start */
//input
const c1n1 = new ListNode(1);
const c1n2 = new ListNode(1);
const c1n3 = new ListNode(2);
c1n1.next = c1n2;
c1n2.next = c1n3;

//expected
const c1n1E = new ListNode(1);
const c1n2E = new ListNode(2);
c1n1E.next = c1n2E;
/**case 1 end */

/**case 2 start */
//input
const c2n1 = new ListNode(1);
const c2n2 = new ListNode(1);
const c2n3 = new ListNode(2);
const c2n4 = new ListNode(3);
const c2n5 = new ListNode(3);
c2n1.next = c2n2;
c2n2.next = c2n3;
c2n3.next = c2n4;
c2n4.next = c2n5;

//expected
const c2n1E = new ListNode(1);
const c2n2E = new ListNode(2);
const c2n3E = new ListNode(3);

c2n1E.next = c2n2E;
c2n2E.next = c2n3E;
/**case 2 end */

export const inputData = {
  case1: c1n1,
  case2: c2n1
};

export const expected = {
  case1: c1n1E,
  case2: c2n1E
};
