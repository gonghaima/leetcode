// export default digits => {
//   let lastOne = digits[digits.length - 1] + 1;
//   digits[digits.length - 1] = lastOne;
//   return digits;
// };

// export default digits => {
//   let strDigi = "";
//   digits.map(num => (strDigi += num));
//   let numDigi = BigInt(strDigi) + 1n;
//   let strResult = numDigi + "";
//   let arrResult = strResult.split("").map(c => Number(c));
//   return arrResult;
// };

export default digits => {
  let firstTime = true;
  let continueCalculation = true;

  let result = [];
  let tempVal = 0;
  for (let i = [digits.length - 1]; i >= 0; i--) {
    let element = digits[i];
    if (firstTime) {
      element += 1;
      firstTime = false;
    } else if (continueCalculation === true) {
      element = digits[i] + tempVal;
      tempVal = 0;
    }

    if (element > 9) {
      const arrE = (element + "").split("").map(c => Number(c));
      result.unshift(arrE[arrE.length - 1]);
      tempVal = arrE[0];
    } else {
      result.unshift(element);
      continueCalculation = false;
    }
  }
  if (tempVal !== 0) result.unshift(tempVal);
  return result;
};
