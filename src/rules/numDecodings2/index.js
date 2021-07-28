/**
 * @param {string} s
 * @return {number}
 */

/************************************************************************************************
 *   Runtime: 140 ms, faster than 82.33% of JavaScript online submissions for Decode Ways II.   *
 * Memory Usage: 46.4 MB, less than 78.72% of JavaScript online submissions for Decode Ways II. *
 ************************************************************************************************/

// https://leetcode.com/problems/decode-ways-ii/discuss/686044/Evolve-from-recursion-to-dp

var numDecodings2 = function (s) {
    const map =
    {
        "**": 15, //11 to 19 and 21 to 26
        "*0": 2, // 1 and 2
        "*1": 2,
        "*2": 2,
        "*3": 2,
        "*4": 2,
        "*5": 2,
        "*6": 2,
        "*7": 1,  //1
        "*8": 1,
        "*9": 1,
        "1*": 9, //1 to 9
        "2*": 6, //1 to 6       
    };
    let n = s.length, mod = 1000000007;
    let dp = 0, dp1 = 1, dp2 = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (s.charAt(i) == '0') dp = 0;
        else {
            dp = (s.charAt(i) == '*' ? 9 : 1) * dp1;
            if (i < n - 1) {
                let s2 = s.substring(i, i + 2);
                if (s2.indexOf('*') > -1) dp = (dp + (map[s2] || 0) * dp2) % mod;
                else if (s.charAt(i) == '1' || (s.charAt(i) == '2' && s.charAt(i + 1) < '7')) dp = (dp + dp2) % mod;
            }
        }
        dp2 = dp1;
        dp1 = dp;
    }
    return dp;
};

export default numDecodings2;