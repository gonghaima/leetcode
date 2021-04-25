/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

/********************************************************************************************************************
 * Runtime: 100 ms, faster than 20.59% of JavaScript online submissions for Get Equal Substrings Within Budget.     *
 * Memory Usage: 40.1 MB, less than 58.82% of JavaScript online submissions for Get Equal Substrings Within Budget. *
 ********************************************************************************************************************/

const convertNum = char => parseInt(char, 36) - 9;

var equalSubstring = function (s, t, maxCost) {
    let left = 0, totalCost = 0, maxLength = Number.MIN_VALUE;
    for (let right = 0; right < s.length; right++) {
        // if can go further , keep going
        totalCost += Math.abs((convertNum(t[right]) - convertNum(s[right])));
        if (totalCost < maxCost) {
            maxLength = Math.max(maxLength, right - left + 1);
        } else if (totalCost === maxCost) {
            maxLength = Math.max(maxLength, right - left + 1);
        } else {
            // if condition met, left ++
            while (totalCost > maxCost) {
                totalCost -= Math.abs(((convertNum(t[left]) - convertNum(s[left]))));
                left++;
            };
            maxLength = Math.max(maxLength, right - left + 1);
        }

    }
    return maxLength;
};

export default equalSubstring;