/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

// https://leetcode.com/problems/filling-bookcase-shelves/discuss/323305/C%2B%2B-4-lines-DFS-%2B-Memo

/*********************************************************************************************************
 *   Runtime: 304 ms, faster than 5.00% of JavaScript online submissions for Filling Bookcase Shelves.   *
 * Memory Usage: 65.1 MB, less than 5.00% of JavaScript online submissions for Filling Bookcase Shelves. *
 *********************************************************************************************************/

var minHeightShelves = function (books, shelfWidth) {
    const m = [...Array(1001)].map(_ => new Array(1001).fill(0));
    const dp = (b, max_w, i = 0, w = 0, h = 0) => {
        if (i >= b.length) return h;
        if (m[i][w] != 0) return m[i][w];
        return m[i][w] = Math.min(h + dp(b, max_w, i + 1, b[i][0], b[i][1]),
            w + b[i][0] > max_w ? Number.MAX_VALUE : dp(b, max_w, i + 1, w + b[i][0], Math.max(h, b[i][1])));
    };
    return dp(books, shelfWidth);
};

export default minHeightShelves;