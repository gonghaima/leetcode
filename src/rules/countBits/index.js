/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let bits = [];
    for (let i = 0; i <= num; i++)
        // remove 0 from bits
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};

export default countBits;