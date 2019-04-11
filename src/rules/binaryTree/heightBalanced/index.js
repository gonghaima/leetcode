export default root => {
  const minDepth = nd => {
    if (!nd) return 0;
    return 1 + Math.min(minDepth(nd.left), minDepth(nd.right));
  };

  const maxDepth = nd => {
    if (!nd) return 0;
    return 1 + Math.max(maxDepth(nd.left), maxDepth(nd.right));
  };

  const balanced = nd => {
    if (!nd) return undefined;
    return maxDepth(nd) - minDepth(nd) <= 1;
  };
  return balanced(root);
};
