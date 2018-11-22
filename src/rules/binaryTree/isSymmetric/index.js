export const isSymmetric = function(root) {
  const startRoot = [root];
  let isSym = true;

  const compareTwoNode = (node1, node2) => {
    //compare two nodes
    if (node1.val !== node2.val) {
      isSym = false;
      return;
    }
    if (
      (node1 && node1.left && node1.left.val) !==
      (node2 && node2.right && node2.right.val)
    ) {
      isSym = false;
      return;
    }
    if (
      (node1 && node1.right && node1.right.val) !==
      (node2 && node2.left && node2.left.val)
    ) {
      isSym = false;
      return;
    }
    if (
      ((node1 && node1.left && node1.left.val) === undefined ||
        (node1 && node1.left && node1.left.val) === null) &&
      (node2 && node2.right && node2.right.value)
    ) {
      isSym = false;
      return;
    }
    if (
      node1 &&
      node1.left &&
      node1.left.value &&
      ((node1 && node1.right && node1.right.val === undefined) ||
        (node1 && node1.right && node1.right.val === null))
    ) {
      isSym = false;
      return;
    }
  };

  const checkSym = nodeList => {
    // if no sym, return
    if (isSym === false) return;

    let nodeLstCopy = nodeList.slice();
    while (nodeList.length > 1 && isSym === true) {
      const nodeFirst = nodeList.shift();
      const nodeLast = nodeList.pop();
      compareTwoNode(nodeFirst, nodeLast);
    }
    if (isSym === true) {
      let childNodeList = [];
      nodeLstCopy.map(c => {
        if (c.left) childNodeList.push(c.left);
        if (c.right) childNodeList.push(c.right);
      });
      if (childNodeList.length > 0) checkSym(childNodeList);
    }
  };
  //if only one in list
  if (root && !root.left && !root.right) {
    isSym = true;
    return isSym;
  }

  checkSym([root.left, root.right]);

  return isSym;
};
