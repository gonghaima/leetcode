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

export const isNodeEqual = (node1, node2) => {
  // Check if both nodes are null (they're equal in that case)
  if (node1 === null && node2 === null) {
    return true;
  }

  // If one node is null and the other is not, they are not equal
  if (node1 === null || node2 === null) {
    return false;
  }

  // Check if the current values of the nodes are equal
  if (node1.val !== node2.val) {
    return false;
  }

  // Recursively check if the next values of the nodes are equal
  return isNodeEqual(node1.next, node2.next);
};
