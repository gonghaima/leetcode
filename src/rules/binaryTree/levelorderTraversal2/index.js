export default root => {
  if (!root) return [];
  let allArr = [];
  let currentNodeList = [root];
  while (currentNodeList.length > 0) {
    let tempArr = [];
    let tempNodeList = [];
    currentNodeList.map(i => {
      if (i.left) tempNodeList.push(i.left);
      if (i.right) tempNodeList.push(i.right);
      tempArr.push(i.val);
    });
    allArr.unshift(tempArr);
    currentNodeList = tempNodeList;
  }
  return allArr;
};
