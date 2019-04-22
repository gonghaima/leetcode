/** Simple One Pass */

export default prices => {
  let mp = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      mp += prices[i] - prices[i - 1];
    }
  }
  return mp;
};
