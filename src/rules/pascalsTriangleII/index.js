export default rowIndex => {
  let result = [];
  let prevArr = [];
  //level
  for (let i = 0; i <= rowIndex; i++) {
    //items in each level
    let curArr = [];
    for (let k = 0; k < i + 1; k++) {
      curArr.push(
        ((prevArr && prevArr[k]) || 0) + ((prevArr && prevArr[k - 1]) || 0) || 1
      );
    }
    prevArr = curArr;
    if (i === rowIndex) return curArr;
  }
};
