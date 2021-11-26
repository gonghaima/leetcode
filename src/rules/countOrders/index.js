/**
 * @param {number} n
 * @return {number}
 */
/**
 * DP
 * dp[i]=
 * for the last dp[i-1] + D
 * two groups - a group of P, a group of D
 * [P1] [D1]  pick an item from group1, pick an item from group2
 * append them together
 * 
 * [P1, P2] [D1, D2]
 * 
 * Math
 * 4+3+2+1
 * factorial(n*2) / n(th) double number
 * 
 * since the number grow (1)2, (2)4, (3)8
 * so the n(th) would be 2..4..8... n(th)
 */
var countOrders = function(n) {
  return Infinity;
};

export default countOrders;
