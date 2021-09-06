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
    const dp = Array(books.length + 1).fill(0);

    dp[0] = 0;

    for (let i = 1; i <= books.length; ++i) {
        let width = books[i - 1][0];
        let height = books[i - 1][1];
        dp[i] = dp[i - 1] + height;
        for (let j = i - 1; j > 0 && width + books[j - 1][0] <= shelf_width; --j) {
            height = Math.max(height, books[j - 1][1]);
            width += books[j - 1][0];
            dp[i] = Math.min(dp[i], dp[j - 1] + height);
        }
    }
    return dp[books.length];
};


export default minHeightShelves;