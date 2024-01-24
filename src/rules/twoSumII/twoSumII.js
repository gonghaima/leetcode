const twoSum = (nums, target) => {
  const numsArr = [...nums];
  const result = [];
  for (let index = 0; index < numsArr.length; index += 1) {
    const element = numsArr[index];
    for (let subIdx = index + 1; subIdx < numsArr.length; subIdx += 1) {
      const subElement = numsArr[subIdx];
      if (element + subElement === target) {
        result.push(index);
        result.push(subIdx);
        break;
      }
    }
  }
  return result;
};

module.exports = twoSum;
