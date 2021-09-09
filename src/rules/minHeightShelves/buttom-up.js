/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

// https://leetcode.com/problems/filling-bookcase-shelves/discuss/323305/C%2B%2B-4-lines-DFS-%2B-Memo

/***********************************************************************************************************
 *    Runtime: 76 ms, faster than 79.49% of JavaScript online submissions for Filling Bookcase Shelves.    *
 * Memory Usage: 39.3 MB, less than 100.00% of JavaScript online submissions for Filling Bookcase Shelves. *
 ***********************************************************************************************************/

var minHeightShelves = function (books, shelfWidth) {
    const dp = Array(books.length + 1).fill(0);
    for (let p = 1; p <= books.length; ++p) {
        for (let i = p, w = 0, h = 0; i > 0 && w + books[i - 1][0] <= shelfWidth; --i) {
            w += books[i - 1][0];
            h = Math.max(h, books[i - 1][1]);
            dp[p] = Math.min(dp[p] == 0 ? Number.MAX_VALUE : dp[p], dp[i - 1] + h);
        }
    }
    return dp[books.length];
};

export default minHeightShelves;