/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let finalHead = head?.next ? head.next : head;
  let swap = true;
  let currentNode = head;
  let preNode = null;
  while (currentNode.next) {
    if (swap) {
      // swap current with next
      // prev -> current
      // begin
      let thirdNode = currentNode?.next?.next;

      let firstNode = currentNode;

      let secondNode = currentNode.next;

      // let tmpNode = firstNode;

      firstNode.next = thirdNode ? thirdNode : null;
      secondNode.next = firstNode;

      if (preNode) {
        preNode.next = secondNode;
      }

      // middle - covered

      // end -> do nothing

      swap = !swap;
      preNode = currentNode;
      currentNode = currentNode.next;
    } else {
      swap = !swap;
      preNode = currentNode;
      currentNode = currentNode.next;
    }

    // begin

    // middle

    // end
  }
  return finalHead;
};

export default swapPairs;
