import ListNode from "../../src/models/listNode";
/**case 1 start*/
let n12 = new ListNode(4);
let n11 = new ListNode(2);
let n10 = new ListNode(1);
n11.next = n12;
n10.next = n11;

let n22 = new ListNode(4);
let n21 = new ListNode(3);
let n20 = new ListNode(1);
n21.next = n22;
n20.next = n21;

let r5 = new ListNode(4);
let r4 = new ListNode(4);
let r3 = new ListNode(3);
let r2 = new ListNode(2);
let r1 = new ListNode(1);
let r0 = new ListNode(1);
r4.next = r5;
r3.next = r4;
r2.next = r3;
r1.next = r2;
r0.next = r1;
/**case 1 end */

/**case 2 start */
let n30 = new ListNode(null);
let n31 = new ListNode(null);
let r6 = new ListNode(null);
/**case 2 end */

/**case 3 start */
let n40 = null;
let n41 = null;
let r7 = null;
/**case 3 end */

/**case 4 start */
let n50 = null;
let n51 = new ListNode(0);
let r8 = new ListNode(0);
/**case 4 end */

/**case 5 start */
let n60 = new ListNode(1);
let n61 = new ListNode(2);
let r9 = new ListNode(1);
let r10 = new ListNode(2);
r9.next = r10;
/**case 5 end */

/**case 7 start */
//<--------input1 start----------------->
let n70 = new ListNode(-10);
let n71 = new ListNode(-9);
let n72 = new ListNode(-6);
let n73 = new ListNode(-4);
let n74 = new ListNode(1);
let n75 = new ListNode(9);
let n76 = new ListNode(9);
n70.next = n71;
n71.next = n72;
n72.next = n73;
n73.next = n74;
n74.next = n75;
n75.next = n76;
//<--------input1 end----------------->

//<--------input2 start------------------>
let n77 = new ListNode(-5);
let n78 = new ListNode(-3);
let n79 = new ListNode(0);
let n710 = new ListNode(7);
let n711 = new ListNode(8);
let n712 = new ListNode(8);
n77.next = n78;
n78.next = n79;
n79.next = n710;
n710.next = n711;
n711.next = n712;
//<--------input2 end-------------------->

//<--------result start------------------>
let n713 = new ListNode(-10);
let n714 = new ListNode(-9);
let n715 = new ListNode(-6);
let n716 = new ListNode(-5);
let n717 = new ListNode(-4);
let n718 = new ListNode(-3);
let n719 = new ListNode(0);
let n720 = new ListNode(1);
let n721 = new ListNode(7);
let n722 = new ListNode(8);
let n723 = new ListNode(8);
let n724 = new ListNode(9);
let n725 = new ListNode(9);
n713.next = n714;
n714.next = n715;
n715.next = n716;
n716.next = n717;
n717.next = n718;
n718.next = n719;
n719.next = n720;
n720.next = n721;
n721.next = n722;
n722.next = n723;
n723.next = n724;
n724.next = n725;

//<--------result end------------------>
/**case 7 end */

/**case 8 start */
//<--------input 1 start----------------->
let n80 = new ListNode(-10);
let n81 = new ListNode(-4);
let n82 = new ListNode(-4);
let n83 = new ListNode(0);
let n84 = new ListNode(0);
n80.next = n81;
n81.next = n82;
n82.next = n83;
n83.next = n84;
//<--------input 1 end----------------->

//<--------input 2 start----------------->
let n85 = null;
//<--------input 2 end----------------->

//<--------result start----------------->
let n86 = new ListNode(-10);
let n87 = new ListNode(-4);
let n88 = new ListNode(-4);
let n89 = new ListNode(0);
let n810 = new ListNode(0);
n86.next = n87;
n87.next = n88;
n88.next = n89;
n89.next = n810;
//<--------result end----------------->
/**case 8 end */

export const inputData = {
  case1: { l1: n10, l2: n20 },
  case2: { l1: n30, l2: n31 },
  case3: { l1: n40, l2: n41 },
  case4: { l1: n50, l2: n51 },
  case5: { l1: n60, l2: n61 },
  case7: { l1: n70, l2: n77 },
  case8: { l1: n80, l2: n85 }
};

export const expected = {
  case1: r0,
  case2: r6,
  case3: r7,
  case4: r8,
  case5: r9,
  case7: n713,
  case8: n86
};
