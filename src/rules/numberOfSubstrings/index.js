/**
 * @param {string} s
 * @return {number}
 */
// my solution - sliding window

/**************************************************************************************************************************************
 * Runtime: 6124 ms, faster than 6.25% of JavaScript online submissions for Number of Substrings Containing All Three Characters.     *
 * Memory Usage: 46.2 MB, less than 14.06% of JavaScript online submissions for Number of Substrings Containing All Three Characters. *
 **************************************************************************************************************************************/

var numberOfSubstrings = function (s) {
    let left = 0;
    let counter = 0;
    const allOccurrence = [...new Set(s)];
    if (allOccurrence.length < 3) return 0;
    const currentArr = [];

    const valid = () => {
        let isValid = true;
        for (let idx = 0; isValid && idx < allOccurrence.length; idx++) {
            const element = allOccurrence[idx];
            if (currentArr.indexOf(element) === -1) isValid = false;
        }
        return isValid;
    }

    for (let right = 0; right < s.length; right++) {
        currentArr.push(s[right]);
        if (valid()) {
            // if match, means the rest (between right and end) would be all meet the requirement
            counter += (s.length - right);
            left++;
            currentArr.shift();
            while (valid()) {
                counter += (s.length - right);
                left++;
                currentArr.shift();
            }
        }
    }
    return counter;
};

// 

export default numberOfSubstrings;