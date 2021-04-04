/************************************************************************************************************************************
 * Runtime: 92 ms, faster than 96.88% of JavaScript online submissions for Number of Substrings Containing All Three Characters.    *
 * Memory Usage: 40 MB, less than 84.38% of JavaScript online submissions for Number of Substrings Containing All Three Characters. *
 ************************************************************************************************************************************/

//super 

var numberOfSubstrings = function (s) {
    const n = s.length;
    const counts = new Array(3).fill(0);

    let res = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const rightIndex = s.charCodeAt(right) - 97;
        counts[rightIndex]++;

        while (counts[0] > 0 && counts[1] > 0 && counts[2] > 0) {
            const leftIndex = s.charCodeAt(left) - 97;
            res += n - right;
            counts[leftIndex]--;
            left++;
        }
    }

    return res;
};

export default numberOfSubstrings;