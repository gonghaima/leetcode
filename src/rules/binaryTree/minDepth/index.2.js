export default root => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left || !root.right) return 2;
  let curNodeList = [];
  curNodeList.push(root);
  let con = true;
  let counter = 1;
  while (con) {
    let tempArr = [];
    curNodeList.map(n => {
      let lv =
        n && Object.prototype.hasOwnProperty.call(n, "left") ? true : false;
      let rv =
        n && Object.prototype.hasOwnProperty.call(n, "right") ? true : false;
      if (!lv && !rv) {
        con = false;
      }

      if (con) {
        tempArr.push(n.left);
        tempArr.push(n.right);
      }
    });
    if (tempArr.length > 0) {
      curNodeList = tempArr;
      counter += 1;
    }
  }

  return counter;
};
