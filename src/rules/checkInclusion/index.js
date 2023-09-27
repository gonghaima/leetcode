/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i)-97]++;
        count[s2.charCodeAt(i)-97]--;
    }
    if (count.every(e => e === 0)) return true;

    for (let i = len1; i < len2; i++) {
        count[s2.charCodeAt(i)-97]--;
        count[s2.charCodeAt(i-len1)-97]++;
        if (count.every(e => e === 0)) return true;
    }
    return false;
};

export default checkInclusion;