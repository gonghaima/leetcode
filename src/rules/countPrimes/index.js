export default n => {
  let counter = 0;
  let finalResult = [];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;

  counter += 2;
  for (let i = 4; i <= n; i++) {
    let isP = true;
    for (let k = 2; k < i && isP === true; k++) {
      if (i % k === 0) isP = false;
    }
    if (isP === true) finalResult.push(i);
  }
  return finalResult.length + 2;
};
