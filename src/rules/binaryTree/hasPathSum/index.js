export default (root, sum) => {
  let has = false;
  const checkTotal = (node, sum, total, equal) => {
    if (
      equal === false &&
      node &&
      (node.val || node.val === 0) &&
      total + node.val === sum
    ) {
      if (node.left === null && node.right === null) has = true;
    }
    if (node && (node.val || node.val === 0) && has === false) {
      const currentTotal = total + node.val;
      // if (currentTotal === sum) has = true;
      if (currentTotal !== sum || (node.left || node.left === 0))
        checkTotal(node.left, sum, currentTotal, false);
      if (currentTotal !== sum || (node.right || node.right === 0))
        checkTotal(node.right, sum, currentTotal, false);
    }
  };
  checkTotal(root, sum, 0, false);
  return has;
};
