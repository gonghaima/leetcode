/**
 * @param {string} s
 * @return {boolean}
 */

/*************************************************************************************************************
 *   Runtime: 76 ms, faster than 73.75% of JavaScript online submissions for Student Attendance Record I.    *
 * Memory Usage: 39.2 MB, less than 30.00% of JavaScript online submissions for Student Attendance Record I. *
 *************************************************************************************************************/

var checkRecord = function (s) {
    let eligible = true;
    let aCount = 0;
    let lCount = {};
    for (let i = 0; eligible && i < s.length; i++) {
        const element = s[i];
        if (element === 'A') aCount++;
        if (aCount > 1) eligible = false;

        if (element === 'L') {
            if (!lCount['L']) lCount['L'] = 1;
            else {
                lCount['L']++;
                if (lCount['L'] > 2) eligible = false;
            }
        } else {
            lCount['L'] = 0;
        };

    }
    return eligible;
};

export default checkRecord;