export const inorderTraversal = root => {
  const result = [];
  const inorder = node => {
    if (!node) return;
    if (node.left) {
      inorder(node.left);
    }
    result.push(node.val);
    if (node.right) {
      inorder(node.right);
    }
  };

  inorder(root);
  return result;
};
