/**
 * @param {string} s
 * @return {boolean}
 */

/*************************************************************************************************************
 *   Runtime: 76 ms, faster than 73.75% of JavaScript online submissions for Student Attendance Record I.    *
 * Memory Usage: 38.9 MB, less than 46.56% of JavaScript online submissions for Student Attendance Record I. *
 *************************************************************************************************************/

var checkRecord = function (s) {
    return !/^.*(A.*A|L{3,}).*$/.test(s);
};

export default checkRecord;