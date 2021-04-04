/**************************************************************************************************************************************
 * Runtime: 104 ms, faster than 72.31% of JavaScript online submissions for Number of Substrings Containing All Three Characters.     *
 * Memory Usage: 40.3 MB, less than 56.92% of JavaScript online submissions for Number of Substrings Containing All Three Characters. *
 **************************************************************************************************************************************/

//simple 

var numberOfSubstrings = function (s) {
    let res = 0;
    let obj = { 'a': 0, 'b': 0, 'c': 0 };
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        obj[s[i]]++;
        while (obj['a'] > 0 && obj['b'] > 0 && obj['c'] > 0) {
            res += s.length - i;
            obj[s[j++]]--;
        }
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

export default numberOfSubstrings;