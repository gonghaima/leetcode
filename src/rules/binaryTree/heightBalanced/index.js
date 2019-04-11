export default root => {
  let isB = true;
  const height = root => {
    if (!root) return 0;
    const left = height(root.left);
    const right = height(root.right);
    if (Math.abs(left - right) > 1) isB = false;

    return Math.max(left, right) + 1;
  };
  const balanced = root => {
    height(root);
    return isB;
  };
  return balanced(root);
};
