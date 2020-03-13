function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const getAListNode = (currentNode, arr) => {
  const data = [...arr];
  const max = Math.max(...data);

  const maxIndex = data.indexOf(max);
  const initLeft = data.slice(0, maxIndex);
  const initRight = data.slice(maxIndex + 1, data.length);

  if (max !== -1) {
    const aNode = new TreeNode(max);
    if (initLeft.length > 0) aNode.left = getAListNode(aNode, initLeft);
    if (initRight.length > 0) aNode.right = getAListNode(aNode, initRight);
    return aNode;
  }
  return null;
};

const constructMaximumBinaryTree = nums => {
  const data = [...nums];
  const max = Math.max(...data);
  const maxIndex = data.indexOf(max);
  const initLeft = data.slice(0, maxIndex);
  const initRight = data.slice(maxIndex + 1, data.length);

  const root = new TreeNode(max);

  root.left = initLeft.length > 0 ? getAListNode(root, initLeft) : null;
  root.right = initRight.length > 0 ? getAListNode(root, initRight) : null;
  return root;
};

module.exports = constructMaximumBinaryTree;
