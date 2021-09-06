/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

/**
 * 
 * another thought
 *     // in dp[i-1]
        // if capacity > dp[i][0]
            // if last row height of dp[i-1] > dp[i][0], return  height of dp[i-1] 
            // else return height of dp[i-1] - last row height of dp[i-1] + height of dp[i]
        // else not enough capacity, return  dp[i-1] + height of dp[i]

        // maxHeight=Math.max(maxHeight, dp[])
 */

var minHeightShelves = function (books, shelfWidth) {
    return Infinity;
};


export default minHeightShelves;