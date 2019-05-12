export const sumOfLeftLeaves = function(root) {
  let sum = 0;
  let currentNodes = [];
  currentNodes.push(root);
  while (currentNodes.length !== 0) {
    let tmNodes = [];
    currentNodes.map(cNode => {
      if (cNode.left && cNode.left.left === null && cNode.left.right === null) {
        sum += cNode.left.val;
      }
      if (cNode.left) tmNodes.push(cNode.left);
      if (cNode.right) tmNodes.push(cNode.right);
    });
    currentNodes = tmNodes;
  }
  return sum;
};
