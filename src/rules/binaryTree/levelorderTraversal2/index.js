export default root => {
  if (!root) return [];
  let allArr = [];
  let currentNodeList = [root];
  while (currentNodeList.length > 0) {
    let tempArr = [];
    allArr.map(i => {
      if (i.left) tempArr.push(i.left);
      if (i.right) tempArr.push(i.right);
      allArr.unshift(i.val);
    });
    currentNodeList = tempArr;
  }
  return allArr;
};
