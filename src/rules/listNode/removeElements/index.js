import ListNode from "../../../models/listNode";
export default (head, val) => {
  let currentNode = head;
  let newRoot = new ListNode(head.val);
  currentNode = currentNode.next;
  const r = newRoot;
  // let newRoot;
  while (currentNode) {
    if (!currentNode) break;
    let tmpNode;
    if (currentNode.val !== val) {
      tmpNode = new ListNode(currentNode.val);
      newRoot.next = tmpNode;
      newRoot = newRoot.next;
      currentNode = currentNode.next;
      continue;
    }
    currentNode = currentNode.next;
  }
  return r;
};
