export const constructListNode = (t = []) => {
  const head = new ListNode(t[0]);
  let currentNode = head;
  for (let idx = 1; idx < t.length; idx++) {
    const val = t[idx];
    const nextNode = new ListNode(val);
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return head;
};

export default class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
