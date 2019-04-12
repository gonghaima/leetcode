export default root => {
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
