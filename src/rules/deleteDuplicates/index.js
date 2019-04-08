import ListNode from "../../models/listNode";
export default head => {
  const rootNode = new ListNode(head.val);
  let currentNode = rootNode;
  let nextNode = head.next;
  while (nextNode) {
    if (currentNode.val === nextNode.val) {
      nextNode = nextNode.next;
    } else {
      currentNode.next = new ListNode(nextNode.val);
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
  }
  // while (currentNode.val) {}
  return rootNode;
};
