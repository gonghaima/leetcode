/**
 * @param {string} s
 * @return {number}
 */

/************************************************************************************************
 *   Runtime: 112 ms, faster than 96.79% of JavaScript online submissions for Decode Ways II.   *
 * Memory Usage: 42.8 MB, less than 94.78% of JavaScript online submissions for Decode Ways II. *
 ************************************************************************************************/

// https://leetcode.com/problems/decode-ways-ii/discuss/1329960/javascript-clean-dp-124ms-100

var numDecodings2 = function (s) {
    const mod = 1e9 + 7;
    let [e0, e1, e2, f0] = [1, 0, 0, 0];
    for (const c of s) {
        if (c == '*') {
            f0 = 9 * e0 + 9 * e1 + 6 * e2;
            e1 = e0;
            e2 = e0;
        } else {
            f0 = (c > '0') * e0 + e1 + (c <= '6') * e2;
            e1 = (c == '1') * e0;
            e2 = (c == '2') * e0;
        }
        e0 = f0 % mod;
    }
    return e0;
};

export default numDecodings2;