/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

const convertNum = char => parseInt(char, 36) - 9;

var equalSubstring = function (s, t, maxCost) {
    let left = 0, currentCost = 0, totalCost = 0, maxLength = Number.MIN_VALUE;
    for (let right = 0; right < s.length; right++) {
        // if can go further , keep going
        totalCost += (convertNum(t[right]) - convertNum(s[right]));
        if (totalCost < maxCost) {
            maxLength = Math.max(maxLength, right - left + 1);
        } else if (totalCost === maxCost) {
            maxLength = Math.max(maxLength, right - left + 1);
        } else {
            // if condition met, left ++
            while (totalCost > maxCost) {
                totalCost -= ((convertNum(t[left]) - convertNum(s[left])));
                left++;
            };
            maxLength = Math.max(maxLength, right - left + 1);
        }

    }
    return maxLength;
};

export default equalSubstring;