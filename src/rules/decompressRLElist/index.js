export default nums => {
  let currentVal = nums;
  let result = [];
  while (currentVal.length > 1) {
    const temp = currentVal.splice(0, 2);
    const tempResult = Array(temp[0]).fill(temp[1]);
    result = result.concat(tempResult);
  }
  return result;
};
