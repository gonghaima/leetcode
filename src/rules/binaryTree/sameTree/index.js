export default (p, q) => {
  const print = nd => {
    let arrR = [];
    let cR = [];
    cR.push(nd);
    while (cR.length > 0) {
      let tempArr = [];
      cR.map(i => {
        if (i && (i.val || i.val === 0)) {
          arrR.push(i.val);
        } else {
          arrR.push("x");
        }
        if (i && i.left) {
          tempArr.push(i.left);
        } else {
          arrR.push("l");
        }
        if (i && i.right) {
          tempArr.push(i.right);
        } else {
          arrR.push("r");
        }
      });
      cR = tempArr;
    }
    return arrR;
  };

  const p1 = print(p);
  const q1 = print(q);

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
