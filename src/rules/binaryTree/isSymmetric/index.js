// export const isSymmetric = function(root) {
//   if (root && root.left && root.right && root.left === root.right) {
//     isSymmetric(root.left);
//     isSymmetric(root.right);
//   } else {
//     return false;
//   }

//   return true;
// };

export const isSymmetric = function(root) {
  const startRoot = [root];
  let isSym = true;

  const compareTwoNode = (node1, node2) => {
    if (
      node1.left &&
      node2.right &&
      node1.left.val === node2.right.val &&
      (node1.right && node2.left && node1.right.val === node2.left.val)
    ) {
    } else {
      isSym = false;
    }
  };

  const checkSym = nodeList => {
    //if only one in list
    if (
      nodeList.length === 1 &&
      nodeList[0] &&
      nodeList[0].left &&
      nodeList[0].right &&
      nodeList[0].left === nodeList[0].right
    ) {
    } else {
      isSym = false;
      return;
    }

    while (nodeList.length > 1 && isSym === true) {
      const nodeFirst = nodeList.shift();
      const nodeLast = nodeList.pop();
      isSym = compareTwoNode(nodeFirst, nodeLast);
    }
  };

  return true;
};
