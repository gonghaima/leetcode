export default (p, q) => {
  let sameTree = true;

  //compare two nodes, include their left and right child
  const compareTwoNode = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return true;
    } else if (node1 === null || node1 === null) {
      sameTree = false;
      return sameTree;
    }

    const v1 = node1 && node1.val;
    const v1Exist = v1 || v1 === 0 ? true : false;

    const v2 = node2 && node2.val;
    const v2Exist = v2 || v2 === 0 ? true : false;

    if (!v1Exist && !v2Exist) {
      return;
    }

    const unBalanced = (v1Exist && !v2Exist) || (!v1Exist && v2Exist);

    if (unBalanced) {
      sameTree = false;
      return sameTree;
    }

    if (node1.val !== node2.val) {
      sameTree = false;
      return sameTree;
    }
    if (
      (node1 && node1.left && node1.left.val) !==
      (node2 && node2.left && node2.left.val)
    ) {
      sameTree = false;
      return sameTree;
    }
    if (
      (node1 && node1.right && node1.right.val) !==
      (node2 && node2.right && node2.right.val)
    ) {
      sameTree = false;
      return sameTree;
    }
    return sameTree;
  };

  const compareRecursive = (n1, n2, same, brk) => {
    if (same === false) {
      return same;
    }
    if (n1 === null && n2 === null) {
      return true;
    }
    same = compareTwoNode(n1, n2);
    if (same === false) {
      return same;
    }
    const a = same && n1.left && n2.left;
    const b = same && n1.right && n1.right;
    if (a && b) {
      return (
        compareRecursive(n1.left, n2.left, same, brk) &&
        compareRecursive(n1.right, n2.right, same, brk)
      );
    } else if (a) {
      return compareRecursive(n1.left, n2.left, same, brk);
    } else if (b) {
      return compareRecursive(n1.right, n2.right, same, brk);
    } else {
      return same;
    }
  };
  sameTree = compareRecursive(p, q);
  return sameTree ? true : false;
};
