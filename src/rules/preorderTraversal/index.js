const loopThrough = (currentNode, data) => {
  if (currentNode && currentNode.val) data.push(currentNode.val);

  if (currentNode && currentNode.left) loopThrough(currentNode.left, data);

  if (currentNode && currentNode.right) loopThrough(currentNode.right, data);
};

const preorderTraversal = root => {
  let data = [];

  loopThrough(root, data);
  return data;
};

export default preorderTraversal;
