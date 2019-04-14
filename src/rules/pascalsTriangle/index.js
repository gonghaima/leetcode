export default numRows => {
  const finalArr = [];
  let curArr = [1];
  let nextArr = [];
  for (let i = 1; i <= numRows; i++) {
    let tempArr = [];
    nextArr = [];
    for (let k = 1; k <= i; k++) {
      if (i === 1) {
        tempArr.push(curArr[k - 1]);
        nextArr.push(curArr[k - 1]);
        nextArr.push(curArr[k - 1]);
      } else if (k === 1) {
        tempArr.push(curArr[k - 1]);
        nextArr.push(curArr[k - 1]);
      } else if (i === k) {
        tempArr.push(curArr[k - 2]);
        nextArr.push(curArr[k - 2]);
      } else {
        const total = curArr[k - 1] + curArr[k - 2];
        tempArr.push(total);
        nextArr.push(total);
      }
    }
    finalArr.push(tempArr);
    curArr = nextArr;
  }
  return finalArr;
};
