export const levelorderTraversal = root => {
  const result = [];
  const inorder = node => {
    if (!node) return;
    if (node.left) {
      inorder(node.left);
    }
    if (node.right) {
      inorder(node.right);
    }
    result.push(node.val);
  };

  inorder(root);
  return result;
};
