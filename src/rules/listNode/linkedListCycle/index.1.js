import ListNode from "../../../models/listNode";
export default head => {
  let headStater = head;

  let cycled = false;
  class ListNodeWithCounter {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.counter = 0;
    }
    getCounter() {
      return this.counter;
    }
    set increaseCounter(cnt) {
      this.counter += cnt;
    }
  }

  let newCopy = new ListNodeWithCounter(head.val);
  newCopy.increaseCounter = 1;

  let currentNode = head;

  while (!cycled && currentNode.next) {
    newCopy.next = new ListNodeWithCounter(currentNode.next.val);
    newCopy.next.increaseCounter = 1;

    if (newCopy.next.getCounter() === 2) {
      cycled = true;
    }
    newCopy = newCopy.next;
    currentNode = currentNode.next;
  }
  return cycled;
};
