export default (num, arr) => {
  const minVal = Math.min(...arr);
  let result = 1;
  let stopOutside = false;
  let stopInside = false;
  for (let i = minVal; i > 0 && !stopOutside; i--) {
    for (let r = 0; r < arr.length && !stopInside; r++) {
      const element = arr[r];
      if (element % i !== 0) {
        break;
      };
      if ((r === arr.length - 1) && element % i === 0) {
        result = i;
        stopInside = true;
        stopOutside = true;
      }
    }
  }
  return result;
};
