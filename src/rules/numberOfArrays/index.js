/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/**
 * 1. brute force O(n!)
 * an util function to validate (no leading zero, less/equal to k)
 * find all permutation, validate & accumulate
 * return result
 *
 * 2. dp - segment with k
 *
 * buttom up - O(n!)
 *  const valid = txt => txt[0]!=='0' && Number(txt)<=k;
 * let counter = 0;
 * for i = 0; i<=(s.length-k.length); i++
 *   dp[i] =
 *      valid(s[i to k.length])?
 *      dp[i] +1 :
 *      dp[i];
 *   counter+=dp[i];
 * return counter;
 *
 * enhancement:
 * if an arange is valid,
 * all permutation of the rest digit can be added in, which is the rest of the length
 * without further validation.
 *
 * for example, if s="3021", k=26.
 * When first valid range found, "30", the length of the rest digit is 2 ("21").
 * Total would be 1 + 2 (length of the rest digit) = 3
 * ["30", "21"] - intial "30" found
 * ["302","1"] - rest
 * ["3021"] - rest
 *
 * So the solution can be O(n)
 * for i=0; i<=s.length; i++
 * let i = 0;
 * let total = 0;
 * while(i<=s.length){
 *    if(range[i to i+k.length] is not value) i++;
 *    total = 1 + (k.length-i);
 * };
 * return total;
 */

var numberOfArrays = function(s, k) {
  return Infinity;
};

export default numberOfArrays;
