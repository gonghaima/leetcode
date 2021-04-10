

/**
 * @param {string} s
 * @return {number}
 */

// sliding window

/***************************************************************************************************************************
 * Runtime: 96 ms, faster than 92.86% of JavaScript online submissions for Replace the Substring for Balanced String.      *
 * Memory Usage: 40.5 MB, less than 42.86% of JavaScript online submissions for Replace the Substring for Balanced String. *
 ***************************************************************************************************************************/

var balancedString = function (s) {
    let countq = 0;
    let countw = 0;
    let counte = 0;
    let countr = 0;

    for (const ch of s) {
        if (ch == 'Q') countq++;
        else if (ch == 'W') countw++;
        else if (ch == 'E') counte++;
        else countr++;
    }

    let n = s.length / 4;

    countq = countq - n < 0 ? 0 : countq - n;
    countw = countw - n < 0 ? 0 : countw - n;
    counte = counte - n < 0 ? 0 : counte - n;
    countr = countr - n < 0 ? 0 : countr - n;

    if (countq + countw + counte + countr == 0) {
        return 0;
    }

    let newcountq = 0;
    let newcountw = 0;
    let newcounte = 0;
    let newcountr = 0;

    let start = 0;

    let min = Number.MAX_VALUE;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch == 'Q') newcountq++;
        else if (ch == 'W') newcountw++;
        else if (ch == 'E') newcounte++;
        else newcountr++;

        while (newcountq >= countq && newcountw >= countw && newcounte >= counte && newcountr >= countr) {
            min = Math.min(min, i - start + 1);
            ch = s[start];
            if (ch == 'Q') newcountq--;
            else if (ch == 'W') newcountw--;
            else if (ch == 'E') newcounte--;
            else newcountr--;
            start++;
        }
    }

    return min;
};

export default balancedString;