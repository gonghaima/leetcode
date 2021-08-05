/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************************************************************************************
 *   Runtime: 80 ms, faster than 74.00% of JavaScript online submissions for Delete and Earn.    *
 * Memory Usage: 42.3 MB, less than 27.20% of JavaScript online submissions for Delete and Earn. *
 *************************************************************************************************/

// https://leetcode.com/problems/delete-and-earn/discuss/109895/JavaC%2B%2B-Clean-Code-with-Explanation

// similar/reduce to https://leetcode.com/problems/house-robber/

var deleteAndEarn = function (nums) {
    let n = 10001;
    let values = new Array(n).fill(0);
    for (let num of nums)
        values[num] += num;

    let take = 0, skip = 0;
    for (let i = 0; i < n; i++) {
        let takei = skip + values[i];
        let skipi = Math.max(skip, take);
        take = takei;
        skip = skipi;
    }
    return Math.max(take, skip);
};

export default deleteAndEarn;


