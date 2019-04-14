import ListNode from "../../../src/models/listNode";

/**case 1 start */
//input
const c1n1 = new ListNode(3);
const c1n2 = new ListNode(2);
const c1n3 = new ListNode(0);
const c1n4 = new ListNode(-4);
c1n1.next = c1n2;
c1n2.next = c1n3;
c1n3.next = c1n4;
c1n4.next = c1n2;
/**case 1 end */

/**case 2 start */
//input
const c2n1 = new ListNode(1);
const c2n2 = new ListNode(2);
c2n1.next = c2n2;
c2n2.next = c2n1;
/**case 2 end */

/**case 3 start */
//input
const c3n1 = new ListNode(1);
/**case 3 end */

export const inputData = {
  case1: c1n1,
  case2: c2n1,
  case3: c3n1
};

export const expected = {
  case1: true,
  case2: true,
  case3: false
};
