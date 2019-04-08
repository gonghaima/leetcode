import ListNode from "../../models/listNode";
export default head => {
  if (head) {
  } else {
    return null;
  }
  if (head && (head.val || head.val === 0)) {
  } else {
    return new ListNode(null);
  }
  const rootNode = new ListNode(head.val);
  let currentNode = rootNode;
  let nextNode = head.next;
  while (nextNode) {
    if (currentNode.val === nextNode.val) {
      nextNode = nextNode.next;
    } else {
      const tempNode = nextNode;
      currentNode.next = new ListNode(nextNode.val);
      currentNode = currentNode.next;
      nextNode = tempNode.next;
    }
  }
  return rootNode;
};
