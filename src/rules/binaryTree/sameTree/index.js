export default root => {
  const startRoot = [root];
  let isSym = true;

  //compare two nodes, include their left and right child
  const compareTwoNode = (node1, node2) => {
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

  //check if a nodeList is symmetric, by checking its value and childrens
  const checkSym = nodeList => {
    // if no sym, return - stop point for recursion call
    if (isSym === false) return;

    let nodeLstCopy = nodeList.slice();
    //loop through all nodes in current level, verify isSym or not.
    while (nodeList.length > 1 && isSym === true) {
      const nodeFirst = nodeList.shift();
      const nodeLast = nodeList.pop();
      compareTwoNode(nodeFirst, nodeLast);
    }

    //if isSym at current level, get all nodes in next level, then repeat the checkSym process
    if (isSym === true) {
      let childNodeList = [];
      nodeLstCopy.map(c => {
        if (c.left) childNodeList.push(c.left);
        if (c.right) childNodeList.push(c.right);
      });
      if (childNodeList.length > 0) checkSym(childNodeList);
    }
  };

  //if there is only one node, only root node, return isSym true
  if (root && !root.left && !root.right) {
    isSym = true;
    return isSym;
  }

  //if root.left and root.right available, start to check
  //else if left availabe but right not, or vice versa, isSym is false
  if (
    root &&
    root.left &&
    root.left !== undefined &&
    root.left !== null &&
    root.right !== undefined &&
    root.right !== null
  ) {
    checkSym([root.left, root.right]);
  } else if (
    (root && root.left && !(root && root.right)) ||
    (!(root && root.left) && (root && root.right))
  ) {
    isSym = false;
  }

  return isSym;
};
