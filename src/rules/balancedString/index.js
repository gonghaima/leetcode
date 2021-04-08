/**
 * @param {string} s
 * @return {number}
 */

var balancedString = function (s) {
    const ref = "QWER";
    const count = [0, 0, 0, 0];
    for (const char of s) {
        count[ref.indexOf(char)] += 1;
    }

    let max = 0, min = 0;
    count.forEach(num => {
        max = num > max ? num : max;
        min = num < min ? num : min;
    })
    if (max === min) return 0;
    return max - min - 1;
};

export default balancedString;