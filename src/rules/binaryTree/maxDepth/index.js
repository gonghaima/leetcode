// export const maxDepth = root => {
//   if (!root) return 0;
//   let result = 0;
//   const initialNodeList = [root];
//   const md = nodeList => {
//     if (nodeList.length === 0) return;
//     result += 1;
//     let tempList = [];
//     nodeList.map(node => {
//       if (node && node.left) tempList.push(node.left);
//       if (node && node.right) tempList.push(node.right);
//     });
//     md(tempList);
//   };
//   md(initialNodeList);
//   return result;
// };

export const maxDepth = function (root, level = 1) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};
