/**
 * @param {number} n
 * @return {number}
 */

// my idea (not working for case3). The average middle numbers will be always has large multiply result
// 10 => 3, 3, 4 ,   as oppose to 1, 9,  etc


var integerBreak = function (n) {
    // from 2 to n
    let max = Number.MIN_SAFE_INTEGER;
    let found = false;
    for (let i = 2; !found && i <= n; i++) {
        const remaining = n % i;

        // no remaining
        if (remaining === 0) {
            const base = n / i;
            const result = Math.pow(base, i);
            if (result > max) {
                max = result;
            } else {
                found = true;
            }
        }

        // got remaining
        else {
            const t = n / i;
            const base = Math.floor(t);
            const result = Math.pow(base, i - 1) * (base + remaining);
            if (result > max) {
                max = result;
            } else {
                found = true;
            }
        }

        // got remaining
        // else {
        //     // const base = (n - remaining) / i;
        //     // console.log(base);
        //     // const result = Math.pow(base, i - 1) * (base + remaining);
        //     // if (result > max) {
        //     //     max = result;
        //     // } else {
        //     //     found = true;
        //     // }

        //     // const result1 = Math.pow(base, i) * (remaining);
        //     // // console.log(result1);
        //     // if (result1 > max) {
        //     //     max = result1;
        //     // } else {
        //     //     found = true;
        //     // }

        //     const base = (n - remaining) / (i - 1);
        //     console.log(base);
        //     const result = Math.pow(base, i - 1) * (base + remaining);
        //     if (result > max) {
        //         max = result;
        //     } else {
        //         found = true;
        //     }
        // }
    }
    return max;
};

export default integerBreak;
