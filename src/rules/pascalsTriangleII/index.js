export default rowIndex => {
  let result = [];
  //level
  for (let i = 0; i <= rowIndex; i++) {
    //items in each level
    let curArr = [];
    for (let k = 0; k < i + 1; k++) {
      const val1 = (result[i - 1] && result[i - 1][k]) || 0;
      const val2 = (result[i - 1] && result[i - 1][k - 1]) || 0;
      curArr.push(val1 + val2 || 1);
    }
    result.push(curArr);
  }
  return result[rowIndex];
};
