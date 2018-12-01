export const levelorderTraversalSolution1 = root => {
  if (!root) return [];
  const traverse = (node, result = [], level = 1) => {
    result[level - 1] = result[level - 1] || [];
    result[level - 1].push(node.val);
    if (node.left) {
      traverse(node.left, result, level + 1);
    }
    if (node.right) {
      traverse(node.right, result, level + 1);
    }
    return result;
  };

  const dataResult = traverse(root);
  return dataResult;
};
