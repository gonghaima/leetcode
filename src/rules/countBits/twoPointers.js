/**
 * @param {number} n
 * @return {number[]}
 */

/***********************************************************************************************
 *   Runtime: 100 ms, faster than 74.13% of JavaScript online submissions for Counting Bits.   *
 * Memory Usage: 44.7 MB, less than 68.66% of JavaScript online submissions for Counting Bits. *
 ***********************************************************************************************/

/**********************************************************************************************************************************************************************************************************************************************************************************************
 * This uses the hint from the description about using ranges. 
 * Basically, the numbers in one range are equal to 1 plus all of the numbers in the ranges before it. If you write out the binary numbers,
 *  you can see that numbers 8-15 have the same pattern as 0-7 but with a 1 at the front. *
 * My logic was to copy the previous values (starting at 0) until a power of 2 was hit (new range), at which point we just reset the t pointer back to 0 to begin the new range.                                                        *
 **********************************************************************************************************************************************************************************************************************************************************************************************/

// https://leetcode.com/problems/counting-bits/discuss/79615/Simple-Java-O(n)-solution-using-two-pointers


var countBits = function (n) {
    const ret = new Array(n + 1).fill(0);
    ret[0] = 0;
    let pow = 1;
    for (let i = 1, t = 0; i <= n; i++, t++) {
        if (i == pow) {
            pow *= 2;
            t = 0;
        }
        ret[i] = ret[t] + 1;
    }
    return ret;
};

export default countBits;