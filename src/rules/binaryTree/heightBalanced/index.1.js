export default root => {
  const checkHeight = root => {
    if (root === null) return 0;
    let leftHeight = checkHeight(root.left);
    let rightHeight = checkHeight(root.right);
    const diff = leftHeight - rightHeight;
    if (Math.abs(diff) > 1) {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };

  const isBalanced = root => {
    if (root === null) return true;
    if (checkHeight(root) === -1) {
      return false;
    } else {
      return isBalanced(root.left) && isBalanced(root.right);
    }
  };
  return isBalanced(root);
};
