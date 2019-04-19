export default rowIndex => {
  let result = [];
  let prevArr = [];
  //level
  for (let i = 0; i <= rowIndex; i++) {
    //items in each level
    let curArr = [];
    for (let k = 0; k < i + 1; k++) {
      const val1 = (prevArr && prevArr[k]) || 0;
      const val2 = (prevArr && prevArr[k - 1]) || 0;
      curArr.push(val1 + val2 || 1);
    }
    prevArr = curArr;
    if (i === rowIndex) return curArr;
  }
  return [];
};
