/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 10;
    let result = {};
    let prev = 9;
    for (let i = 2; i <= n; i++) {
        const tmp = Math.pow(10, i) - prev;
        result[i] = tmp;
        prev = tmp;
    };

    return result[n];
};

export default countNumbersWithUniqueDigits;