export const loopMatch = arr => {
  let arrIsPa = true;
  while (arr.length > 1 && arrIsPa === true) {
    const a = arr.shift();
    const b = arr.pop();
    if (a !== b) {
      arrIsPa = false;
    }
  }
  return arrIsPa;
};

const findLongestMatch = (inputArr, arrLength) => {
  let arrSplitted = [];
  const copyInputArr = [...inputArr];
  const loopLength = inputArr.length - arrLength;
  let currentSplitted = [];
  for (let index = 0; index < loopLength + 1; index += 1) {
    if (copyInputArr[index + arrLength - 1]) {
      currentSplitted.push(copyInputArr.slice(index, index + arrLength));
    }
  }

  // foreach of the item, if return true, return the value, otherwise length-1 and keep going
  let exists = false;
  for (let x = 0; x < currentSplitted.length; x += 1) {
    const result = loopMatch([...currentSplitted[x]]);
    if (result) {
      exists = true;
      return currentSplitted[x];
    }
  }
  return findLongestMatch(copyInputArr, arrLength - 1);
};

export const longestPalindrome = s => {
  const sub = s.split('');
  let resultArr = findLongestMatch(sub, sub.length);
  let resultStr = resultArr.join('');
  return resultStr;
};
