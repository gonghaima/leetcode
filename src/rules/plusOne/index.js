export default (digits) => {
  let end = digits.length - 1;
  for (let i = end; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) digits.unshift(1);
  return digits;
};
