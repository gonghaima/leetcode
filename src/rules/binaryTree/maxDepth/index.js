export const maxDepth = root => {
  if (!root) return 0;
  let result = 0;
  const initialNodeList = [root];
  const md = nodeList => {
    if (nodeList.length === 0) return;
    result += 1;
    let tempList = [];
    nodeList.map(node => {
      if (node && node.left) tempList.push(node.left);
      if (node && node.right) tempList.push(node.right);
    });
    md(tempList);
  };
  md(initialNodeList);
  return result;
};
