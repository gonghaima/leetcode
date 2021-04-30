/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/***********************************************************************************************************************
 * Runtime: 88 ms, faster than 90.17% of JavaScript online submissions for Longest Repeating Character Replacement.    *
 * Memory Usage: 40 MB, less than 39.08% of JavaScript online submissions for Longest Repeating Character Replacement. *
 *                                                                                                                     *
 ***********************************************************************************************************************/
// sliding window
// https://leetcode.com/problems/longest-repeating-character-replacement/discuss/1110705/JS-sliding-window

var characterReplacement = function (s, k) {
    let i = 0
    let max = 0
    let len = 0
    let map = {}
    for (let j = 0; j < s.length; j++) {
        const c = s[j]
        map[c] = (map[c] || 0) + 1
        max = Math.max(map[c], max)
        while (j - i + 1 - max > k) map[s[i++]]--;
        len = Math.max(len, j - i + 1)
    }
    return len
};

export default characterReplacement;