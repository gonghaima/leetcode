import ListNode from '../../src/rules/addTwoNumbers/model/listNode';
/** scenario 1 */
const s1l1Three = new ListNode(3);
const s1l1Four = new ListNode(4);
s1l1Four.next = s1l1Three;
const s1l1Two = new ListNode(2);
s1l1Two.next = s1l1Four;

const s1l2Four = new ListNode(4);
const s1l2Six = new ListNode(6);
s1l2Six.next = s1l2Four;
const s1l2Five = new ListNode(5);
s1l2Five.next = s1l2Six;

/** scenario 2 */
const s2l1Eight = new ListNode(8);
const s2l1One1 = new ListNode(1);
s2l1One1.next = s2l1Eight;

const s2l2Zero = new ListNode(0);

/** scenario 3 */
const s3l1Zero = new ListNode(0);

const s3l2Three = new ListNode(3);
const s3l2Seven = new ListNode(7);
s3l2Seven.next = s3l2Three;

/** scenario 4 */
const s4l1Eight = new ListNode(8);
const s4l1Nine = new ListNode(9);
s4l1Nine.next = s4l1Eight;

const s4l2One = new ListNode(1);

export {
  s1l1Two,
  s1l2Five,
  s2l1One1,
  s2l2Zero,
  s3l1Zero,
  s3l2Seven,
  s4l1Nine,
  s4l2One
};
