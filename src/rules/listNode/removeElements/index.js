import ListNode from "../../../models/listNode";
export default (head, val) => {
  if (!head) return head;
  if (!head.val && head.val !== 0) return head;

  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) return head;
  let newRoot = new ListNode(head.val);
  let currentNode = head;
  currentNode = currentNode.next;
  const r = newRoot;
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
