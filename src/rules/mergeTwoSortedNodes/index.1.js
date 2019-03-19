import ListNode from "../../models/listNode";
export const mergeTwoSortedNodes = (l1, l2) => {
  let rootNode = new ListNode(null);
  let prevNode;
  let currentNode;
  let currentL1Node = l1;
  let currentL2Node = l2;

  while (currentL1Node.next || currentL2Node.next) {
    if (!rootNode.val && currentL1Node.next && currentL2Node.next) {
      if (currentL1Node.next.val < currentL2Node.next.val) {
        rootNode.val = currentL1Node.val;
        // currentNode = rootNode;
        currentL1Node = currentL1Node.next;
      } else {
        rootNode.val = currentL2Node.val;
        // currentNode = rootNode;

        // prevNode = l2;
        currentL2Node = currentL2Node.next;
      }
      currentNode = rootNode;
      prevNode = rootNode;
      continue;
    }

    if (
      currentL1Node.next &&
      currentL2Node.next &&
      currentL1Node.next.val < currentL2Node.next.val
    ) {
      currentNode = new ListNode(currentL1Node.next.val);
      prevNode.next = currentNode;
      prevNode = currentNode;
      // prevNode = currentL1Node;
      currentL1Node = currentL1Node.next;
      continue;
    } else if (
      currentL1Node.next &&
      currentL2Node.next &&
      currentL1Node.next.val >= currentL2Node.next.val
    ) {
      currentNode = new ListNode(currentL2Node.next.val);
      prevNode.next = currentNode;
      prevNode = currentNode;
      currentL2Node = currentL2Node.next;
      continue;
    }

    if (currentL1Node.next) {
      currentNode = new ListNode(currentL1Node.next.val);
      prevNode.next = currentNode;
      currentL1Node = currentL1Node.next;
      continue;
    } else {
      currentNode = new ListNode(currentL2Node.next.val);
      prevNode.next = currentNode;
      prevNode = currentNode;
      currentL2Node = currentL2Node.next;
      continue;
    }
  }

  return rootNode;
};
