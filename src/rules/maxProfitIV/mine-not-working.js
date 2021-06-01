/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIV = function (k, prices) {
  let oneBuyOneSell = 0;
  let twoBuyTwoSell = 0;
  let oneBuy = Number.POSITIVE_INFINITY
  let twoBuy = Number.POSITIVE_INFINITY;

  let buySell = [];
  let buy = [];
  for (let i = 0; i < k; i++) {
    buySell.push(0);
    buy.push(Number.POSITIVE_INFINITY);
  }

  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    let ajustAmount = 0;
    for (let i = 0; i < k; i++) {
      buy[i] = Math.min(buy[i], p - ajustAmount);
      buySell[i] = Math.max(buySell[i], p - buy[i]);
      ajustAmount = buySell[i];
    }
    oneBuy = Math.min(oneBuy, p);
    oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy);
    twoBuy = Math.min(twoBuy, p - oneBuyOneSell);
    twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy);
  }
  return buySell.pop();
};

export default maxProfitIV;