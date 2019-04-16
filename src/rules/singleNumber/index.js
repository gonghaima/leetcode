export default nums => {
  let aggregatedNums = nums.reduce((i, c) => {
    if (!i) {
      i = {};
      i[c] = 1;
      return i;
    }
    if (!i[c]) {
      i[c] = 1;
    } else {
      i[c] += 1;
    }
    return i;
  }, null);
  const result = Object.entries(aggregatedNums).filter(item => {
    return item[1] === 1;
  });
  return Number(result[0][0]);
};
