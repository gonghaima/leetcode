export default (p, q) => {
  const printVal = (n, arr = []) => {
    if (n && (n.val || n.val === 0)) {
      arr.push(n.val);
    } else {
      arr.push("x");
      return arr;
    }

    return printVal((n && n.left) || null, arr).concat(
      printVal((n && n.right) || null, arr)
    );
  };

  const p1 = printVal(p);
  const q1 = printVal(q);

  let same = true;
  if (p1.length !== q1.length) {
    same = false;
    return same;
  }
  while (p1.length !== 0) {
    if (p1.pop() !== q1.pop()) {
      same = false;
      return same;
    }
  }

  return same;
};
