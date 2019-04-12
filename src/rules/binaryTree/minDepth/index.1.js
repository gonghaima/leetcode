export default root => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left || !root.right) return 2;
  let counter = 1;
  let con = true;
  const ht = nd => {
    con;
    if (!nd) return 0;
    if (nd.left && nd.right && con) {
      counter += 1;
      return ht(nd.left) && ht(nd.right);
    } else {
      con = false;
      return;
    }
  };
  ht(root, true);
  return counter;
};
