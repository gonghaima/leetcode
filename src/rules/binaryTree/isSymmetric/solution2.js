export const isSymmetricV2 = function(root) {
  const dfs = (node1, node2) => {
    if (node1 == null && node2 == null) {
      return true;
    }
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    const l = dfs(node1.left, node2.right);
    const r = dfs(node1.right, node2.left);
    return l && r;
  };
  if (root == null) {
    return true;
  }
  return dfs(root.left, root.right);
};
