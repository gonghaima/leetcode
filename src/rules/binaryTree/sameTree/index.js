export default (a, b) => {
  let sameTree = true;

  //compare two nodes, include their left and right child
  const compareTwoNode = (node1, node2) => {
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

  const compareRecursive = (n1, n2, same) => {
    if (same === false) {
      return same;
    }
    same = compareTwoNode(n1, n2);
    const a = same && n1.left && n2.left;
    const b = same && n1.right && n1.right;
    if (a && b) {
      return (
        compareRecursive(n1.left, n2.left, same) &&
        compareRecursive(n1.right, n2.right, same)
      );
    } else if (a) {
      return false;
    } else if (b) {
      return false;
    } else {
      return same;
    }
  };

  sameTree = compareRecursive(a, b);

  return sameTree ? true : false;
};
