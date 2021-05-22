export default prices => {
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    const val1 = prices[i];
    for (let k = i + 1; k < prices.length; k++) {
      const val2 = prices[k];
      let diff = val2 - val1;
      if (diff > maxP) maxP = diff;
    }
  }
  return maxP;
};


/*
export default prices => {
  let maxP = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j < prices.length) {
      if (prices[j] >= prices[i]) {
        maxP = Math.max(maxP, prices[j] - prices[i]);
      };
      j++;
    }
  }

  return maxP > 0 ? maxP : 0;
};
 */