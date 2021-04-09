/**
 * @param {string} s
 * @return {number}
 */

// This solution is not working, because the question is asking for minimum "substring"

var balancedString = function (s) {
    const ref = "QWER";
    const count = [0, 0, 0, 0];
    for (const char of s) {
        count[ref.indexOf(char)] += 1;
    }

    let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
    count.forEach(num => {
        max = num > max ? num : max;
        min = num < min ? num : min;
    })


    if (max === min) return 0;


    const total = count.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);
    const average = total / 4;
    let increaseNo = 0;
    let decreaseNo = 0;
    count.forEach(num => {
        if (num > average) {
            decreaseNo += (num - average);
        } else {
            increaseNo += (num - average);
        }
    })


    return decreaseNo;
};

export default balancedString;