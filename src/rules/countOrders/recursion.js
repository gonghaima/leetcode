/**
 * @param {number} n
 * @return {number}
 */

// // https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/discuss/516968/JavaC%2B%2BPython-Easy-and-Concise

/**********************************************************************************************************************
 * Runtime: 134 ms, faster than 9.52% of JavaScript online submissions for Count All Valid Pickup and Delivery Options. *
 * Memory Usage: 38.9 MB, less than 61.90% of JavaScript online submissions for Count All Valid Pickup and Delivery Options. *
 **********************************************************************************************************************/

var countOrders = function(n, res = 1) {
  return n ? countOrders(n - 1, (res * (n * 2 - 1) * n) % (10 ** 9 + 7)) : res;
};

export default countOrders;
