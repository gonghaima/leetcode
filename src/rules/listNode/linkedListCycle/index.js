export default head => {
  if (!head || !head.next) return false;
  let cache = [];
  let cycled = false;
  let currentNode = head;
  cache.push(head);
  while (!cycled && currentNode.next) {
    if (cache.indexOf(currentNode.next) !== -1) {
      cycled = true;
    } else {
      cache.push(currentNode.next);
      currentNode = currentNode.next;
    }
  }
  return cycled;
};
