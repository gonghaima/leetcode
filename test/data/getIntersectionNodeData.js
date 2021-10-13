import ListNode from "../../src/models/listNode";

/**case 1 start */
//input
//1
const c1n1 = new ListNode(4);
const c1n2 = new ListNode(1);
c1n1.next = c1n2;

//common
const c1n3 = new ListNode(8);
const c1n4 = new ListNode(4);
const c1n5 = new ListNode(5);
c1n3.next = c1n4;
c1n4.next = c1n5;

//2
const c1n6 = new ListNode(5);
const c1n7 = new ListNode(0);
const c1n8 = new ListNode(1);
c1n6.next = c1n7;
c1n7.next = c1n8;

//link common
c1n2.next = c1n3;
c1n8.next = c1n3;

//expected
const c1E = 8;
/**case 1 end */

/**case 2 start */
//input
//1
const c2n1 = new ListNode(0);
const c2n2 = new ListNode(9);
const c2n3 = new ListNode(1);
//common
const c2n4 = new ListNode(2);
const c2n5 = new ListNode(4);
//2
const c2n6 = new ListNode(3);

c2n1.next = c2n2;
c2n2.next = c2n3;
c2n3.next = c2n4;
c2n4.next = c2n5;

c2n6.next = c2n4;

//expected
const c2E = 2;
/**case 2 end */

/**case 3 start */
//input
//1
const c3n1 = new ListNode(2);
const c3n2 = new ListNode(6);
const c3n3 = new ListNode(4);

//2
const c3n4 = new ListNode(1);
const c3n5 = new ListNode(5);

c3n1.next = c3n2;
c3n2.next = c3n3;

c3n4.next = c3n5;

//expected
const c3E = null;
/**case 3 end */

/**case 4 start */
//1
const c4n1 = new ListNode(null);

const c4n2 = new ListNode(2);

c4n2.next = c4n1;
//expected
const c4E = null;
/**case 4 end */

/**case 5 start */
//1
const c5n1 = new ListNode(3);

const c5n2 = new ListNode(2);

c5n2.next = c5n1;
//expected
const c5E = 3;
/**case 5 end */

/**case 6 start */
//1
const c6n1 = new ListNode(1);

const c6n2 = new ListNode(2);
c6n1.next = c6n2;

//expected
const c6E = 2;
/**case 6 end */

const inputData = {
  case1: { headA: c1n1, headB: c1n6 },
  case2: { headA: c2n1, headB: c2n6 },
  case3: { headA: c3n1, headB: c3n4 },
  case4: { headA: c4n1, headB: c4n2 },
  case5: { headA: c5n1, headB: c5n2 },
  case6: { headA: c6n1, headB: c6n2 }
};

const expected = {
  case1: c1E,
  case2: c2E,
  case3: c3E,
  case4: c4E,
  case5: c5E,
  case6: c6E
};

export default () => { return { inputData, expected } }