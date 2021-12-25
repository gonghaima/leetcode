/**
 * @param {number[]} stoneValue
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-v/discuss/911676/Java-O(n3)-O(n2-log-n)-and-O(n2)-with-explanation

/**********************************************************************************************
 * Runtime: 140 ms, faster than 100.00% of JavaScript online submissions for Stone Game V.    *
 * Memory Usage: 49.9 MB, less than 14.29% of JavaScript online submissions for Stone Game V. *
 **********************************************************************************************/

// O(n^2)

/***********************************************************************************************************************
 * Optimization                                                                                                        *
 * We can optimize the previous solution even further by getting rid of the binary search step needed to find the critical k (= k') of stones[i..j]. *
 * Binary search is great when we need the answer for arbitrary i and j but why not calculate dp[i][j] in such an order where we could leverage the k' information from previous i and j. *
 * Suppose we know the k' for stones[i..j], what do we know about k' for stones[i..j+1]? It is either the same or it got shifted a few places to the right. *
 * And so if we calculate dp values in the order: dp[i][i], dp[i][i+1], dp[i][i+2], ..., dp[i][j], we can essentially keep track of k' as we go within that same linear time bound. *
 * Using this idea, we implement the final solution. Couple of pointers about my code:                                 *
 * mid: represents k' or first index such that left half >= right half                                                 *
 * with i < j, max[i][j] represents left[i][j] of previous solution i.e. max(dp[i][i], dp[i][i+1], dp[i][i+2] .. dp[i][j]) and max[j][i] represents right[i][j] of previous solution i.e. max(dp[i][j], dp[i+1][j], dp[i+2][j] .. dp[j][j]). We could have used two different arrays left and right just like previous solution but this trick saves space. *
 * I am traversing in the order: dp[j][j], dp[j-1,j], dp[j-2, j], .., dp[i][j] instead of the above mentioned order but the idea remains same. *
 ***********************************************************************************************************************/

var stoneGameV = function(stoneValue) {
  let n = stoneValue.length;
  let dp = new Array(n).fill(null).map((_) => new Array(n).fill(0)),
    max = new Array(n).fill(null).map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    max[i][i] = stoneValue[i];
  }
  for (let j = 1; j < n; j++) {
    let mid = j,
      sum = stoneValue[j],
      rightHalf = 0;
    for (let i = j - 1; i >= 0; i--) {
      sum += stoneValue[i];
      while ((rightHalf + stoneValue[mid]) * 2 <= sum) {
        rightHalf += stoneValue[mid--];
      }
      dp[i][j] =
        rightHalf * 2 == sum ? max[i][mid] : mid == i ? 0 : max[i][mid - 1];
      dp[i][j] = Math.max(dp[i][j], mid == j ? 0 : max[j][mid + 1]);
      max[i][j] = Math.max(max[i][j - 1], dp[i][j] + sum);
      max[j][i] = Math.max(max[j][i + 1], dp[i][j] + sum);
    }
  }
  return dp[0][n - 1];
};

export default stoneGameV;
