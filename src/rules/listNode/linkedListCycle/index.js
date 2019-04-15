export default head => {
  if(!head)return -1;
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
