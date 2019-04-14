export default numRows => {
  const finalArr = [];
  let preArr = [1];
  let curArr = [1];
  let nextArr = [1];
  for (let i = 1; i <= 5; i++) {
    let tempArr = [];
    // tempArr.push(curArr[0]);
    for (let k = 1; k <= i; k++) {
      if (nextArr.length === 1) {
        tempArr = curArr;
        nextArr.push(curArr[0]);
        nextArr.push(curArr[0]);
      } else if (k === 2) {
        nextArr.push(curArr[k - 0]);
        const total = curArr[k - 1] + curArr[k - 2];
      } else if (k === i) {
        const total = curArr[k - 2];
        nextArr.push(total);
      } else {
        const total = curArr[k - 1] + curArr[k - 2];
        tempArr.push(total);
        nextArr.push(total);
      }
    }
    curArr = nextArr;
    finalArr.push(tempArr);
  }
  return finalArr;
};
