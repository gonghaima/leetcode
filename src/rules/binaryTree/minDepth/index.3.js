export default root => {
  const checkHeight = root => {
    if (root === null) return 0;
    let leftHeight = checkHeight(root.left);
    let rightHeight = checkHeight(root.right);
    return Math.min(leftHeight, rightHeight) + 1;
  };

  const minH = checkHeight(root);

  return minH;
};
