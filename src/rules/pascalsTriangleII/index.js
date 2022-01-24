/******************************************************************************************************
 *   Runtime: 94 ms, faster than 34.83% of JavaScript online submissions for Pascal's Triangle II.    *
 * Memory Usage: 38.6 MB, less than 68.19% of JavaScript online submissions for Pascal's Triangle II. *
 ******************************************************************************************************/

export default (rowIndex) => {
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
