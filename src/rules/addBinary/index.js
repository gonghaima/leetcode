export default (a, b) => {
  const aLength = a.length;

  const bLength = b.length;

  let longerString;

  let shorterString;

  let reservedVal = 0;
  let result = "";

  if (aLength > bLength) {
    longerString = Object.assign(a);
    longerStringLength = aLength;
    shorterString = Object.assign(b);
    shorterStringLength = bLength;
  } else {
    longerString = Object.assign(b);
    longerStringLength = bLength;
    shorterString = Object.assign(a);
    shorterStringLength = aLength;
  }

  let longerStringHolder = Object.assign(longerString);
  let shorterStringHolder = Object.assign(shorterString);

  const lastOne = s => s.substring(s.length - 1);
  const remaining = s => s.substring(0, s.length - 1);

  while (longerStringHolder.length !== 0) {
    const lL = lastOne(longerStringHolder);
    const lR = remaining(longerStringHolder);
    longerStringHolder = lR;

    const sL = lastOne(shorterStringHolder);
    const sR = remaining(shorterStringHolder);
    shorterStringHolder = sR;

    let cTotal;
    if (sL !== "") {
      cTotal = Number(lL) + Number(sL) + reservedVal;
    } else {
      cTotal = Number(lL) + reservedVal;
    }
    if (cTotal === 0) {
      result = "0" + result;
      reservedVal = 0;
    } else if (cTotal === 1) {
      result = "1" + result;
      reservedVal = 0;
    } else if (cTotal === 2) {
      result = "0" + result;
      reservedVal = 1;
    } else if (cTotal === 3) {
      result = "1" + result;
      reservedVal = 1;
    }
  }
  if (reservedVal === 1) result = "1" + result;
  return result;
};
