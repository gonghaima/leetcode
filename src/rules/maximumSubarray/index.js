export default nums => {
  let maxVal = null;
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const curNums = nums.slice(i);
    curNums.reduce((i, item) => {
      if (i === null) {
        i = item;
      } else {
        i = i + item;
      }
      if (maxVal === null) {
        maxVal = i;
      } else {
        if (i > maxVal) maxVal = i;
      }
      return i;
    }, null);
  }
  return maxVal;
};
