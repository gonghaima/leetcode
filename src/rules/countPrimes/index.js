export default n => {
  if (n <= 2) return 0;
  if (n === 3) return 1;

  let nonPrimeNums = new Array(n).fill(false);
  let counter = 0;

  for (let i = 2; i < n; i++) {
    if (nonPrimeNums[i]) continue;
    counter += 1;

    for (let j = 2; j < n; j++) {
      let num = i * j;
      if (num >= n) break;
      nonPrimeNums[num] = true;
    }
  }

  return counter;
};
