/**
 * @param {string} s
 * @return {number}
 */
// my solution - sliding window - a bit enhanced: use set to track all value, instead of an array comparing each value

/**************************************************************************************************************************************
 * Runtime: 160 ms, faster than 10.94% of JavaScript online submissions for Number of Substrings Containing All Three Characters.     *
 * Memory Usage: 45.3 MB, less than 20.31% of JavaScript online submissions for Number of Substrings Containing All Three Characters. *
 **************************************************************************************************************************************/

// my solution - enhanced a bit

var numberOfSubstrings = function (s) {
    let left = 0;
    let counter = 0;
    const allOccurrence = [...new Set(s)];
    const occurrence = new Map();
    if (allOccurrence.length < 3) return 0;

    for (let right = 0; right < s.length; right++) {
        if (!occurrence.has(s[right])) {
            occurrence.set(s[right], 1)
        } else {
            occurrence.set(s[right], occurrence.get(s[right]) + 1);
        }

        if (occurrence.size === 3) {
            // if match, means the rest (between right and end) would be all meet the requirement
            counter += (s.length - right);

            let currentLeftCharCount = occurrence.get(s[left]);
            if (currentLeftCharCount > 1) {
                occurrence.set(s[left], currentLeftCharCount - 1);
            } else {
                occurrence.delete(s[left]);
            }
            left++;
            while (occurrence.size === 3) {
                counter += (s.length - right);
                currentLeftCharCount = occurrence.get(s[left]);
                if (currentLeftCharCount > 1) {
                    occurrence.set(s[left], currentLeftCharCount - 1);
                } else {
                    occurrence.delete(s[left]);
                }
                left++;
            }
        }
    }
    return counter;
};

export default numberOfSubstrings;