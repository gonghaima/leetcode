export default n => {
  let counter = 0;
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 0;
  if (n === 3) return 1;
  if (n === 4) return 2;

  counter += 2;
  for (let i = 5; i < n; i += 2) {
    let isP = true;
    for (let k = 2; k < i && isP === true; k++) {
      if (i % k === 0) isP = false;
    }
    if (isP === true) counter += 1;
  }
  return counter;
};
