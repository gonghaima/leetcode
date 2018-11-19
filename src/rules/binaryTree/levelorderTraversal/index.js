export const levelorderTraversal = root => {
  const result = [];
  const levelorder = nodeList => {
    if (nodeList.length === 0) return;
    let currentResult = [];
    let nodeListForNext = [];
    nodeList.map(element => {
      if (element && (element.val || element.val === 0))
        currentResult.push(element.val);
      if (element && element.left) nodeListForNext.push(element.left);
      if (element && element.right) nodeListForNext.push(element.right);
    });
    if (currentResult.length > 0) result.push(currentResult);
    if (nodeListForNext.length > 0) levelorder(nodeListForNext);
  };

  levelorder([root]);
  return result;
};
