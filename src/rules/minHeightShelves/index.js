/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

// https://leetcode.com/problems/filling-bookcase-shelves/discuss/323932/JAVA-DP-with-Explanation

/***********************************************************************************************************
 *    Runtime: 72 ms, faster than 89.74% of JavaScript online submissions for Filling Bookcase Shelves.    *
 * Memory Usage: 39.4 MB, less than 100.00% of JavaScript online submissions for Filling Bookcase Shelves. *
 ***********************************************************************************************************/

var minHeightShelves = function (books, shelfWidth) {
    const dp = Array(books.length + 1);
    dp[0] = 0;
    for (let i = 1; i <= books.length; ++i) {
        let width = books[i - 1][0];
        let height = books[i - 1][1];
        dp[i] = dp[i - 1] + height;
        for (let j = i - 1; j > 0 && width + books[j - 1][0] <= shelfWidth; --j) {
            height = Math.max(height, books[j - 1][1]);
            width += books[j - 1][0];
            dp[i] = Math.min(dp[i], dp[j - 1] + height);
        }
    }
    return dp[books.length];
};

export default minHeightShelves;