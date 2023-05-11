import ListNode from '../../src/models/listNode-v1';

const constructListNode = (t = []) => {
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

export const inputData = {
  case1: { head: constructListNode([1, 2, 3, 4, 5]), n: 2 },
  case2: { head: constructListNode([1]), n: 1 },
  case3: { head: constructListNode([1, 2]), n: 1 },
};

export const expected = {
  case1: constructListNode([1, 2, 3, 5]),
  case2: [],
  case3: new ListNode(1),
};
