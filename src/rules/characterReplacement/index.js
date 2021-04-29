/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*************************************************************************************************************************
 * Runtime: 92 ms, faster than 77.85% of JavaScript online submissions for Longest Repeating Character Replacement.      *
 * Memory Usage: 39.7 MB, less than 56.14% of JavaScript online submissions for Longest Repeating Character Replacement. *
 *************************************************************************************************************************/

// sliding window
// https://leetcode.com/problems/longest-repeating-character-replacement/discuss/491486/JavaScript-Solution

var characterReplacement = function (s, k) {
    let left = 0, right = 0, max = 0, mostFreq = 0;
    let freqHash = {};

    for (let right = 0; right < s.length; right++) {
        freqHash[s[right]] = freqHash[s[right]] + 1 || 1;
        mostFreq = Math.max(mostFreq, freqHash[s[right]]);
        while (right - left + 1 - mostFreq > k) {
            freqHash[s[left]] -= 1;
            left++;
        }
        max = Math.max(max, right - left + 1);
    }

    return max;
};

export default characterReplacement;