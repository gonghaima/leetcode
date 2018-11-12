
const preorderTraversal = root => {
  const result = [];
  const inorder = node => {
    if (!node) return;
    result.push(node.val);
    if (node.left) {
      inorder(node.left);
    }
    if (node.right) {
      inorder(node.right);
    }
  };

  inorder(root);
  return result;
};

export default preorderTraversal;
