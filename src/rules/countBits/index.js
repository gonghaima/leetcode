/**
 * @param {number} n
 * @return {number[]}
 */

/***********************************************************************************************
 *   RUNTIME: 144 MS, FASTER THAN 28.22% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNTING BITS.   *
 * MEMORY USAGE: 50.5 MB, LESS THAN 12.14% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNTING BITS. *
 ***********************************************************************************************/

// https://leetcode.com/problems/counting-bits/discuss/79592/Intuitive-Javascript-Solution

var countBits = function (n) {
    let bits = [];
    for (let i = 0; i <= n; i++)
        // remove 0 from bits
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};

export default countBits;