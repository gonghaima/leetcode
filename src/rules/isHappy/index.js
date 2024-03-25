/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const toSplittedDigits = (param) => param.toString().split('');
  let foundisHappy = false;
  let splittedDigits = toSplittedDigits(n);
  let rootSum = n;

  const getNewSplittedDigits = (digits) => {
    let sum = 0;
    let foundIt = false;
    for (let i = 0; i < digits.length; i++) {
      const element = digits[i];
      sum += Number(element) ** 2;
    }
    if (sum === 1) {
      foundIt = true;
    }

    return { digits: sum.toString(), foundIt };
  };

  while (!foundisHappy && rootSum > 10) {
    const { digits, foundIt } = getNewSplittedDigits(splittedDigits);
    if (foundIt) {
      foundisHappy = true;
    }
    splittedDigits = toSplittedDigits(digits);
    rootSum = Number(digits);
  }

  return foundisHappy;
};

export default isHappy;
