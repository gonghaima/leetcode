/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0, max = Number.MIN_VALUE, count = 0;
    let limit = 2 * (k + 1) - 1;
    const tracking = new Map();
    // const tracking = {};
    for (let right = 0; right < s.length; right++) {
        if (!s[right - 1]) count++;
        else if (s[right] !== s[right - 1]) count++;
        // if same as last one
        tracking.set(s[right], tracking.get(s[right]) + 1 || 1);

        if (count <= limit + 1) {
            max = Math.max(max, right - left + 1);
        } else {
            while (count > limit + 1) {
                if (tracking.get(s[left]) === 1) {
                    tracking.delete(s[left])
                } else {
                    tracking.set(s[left], tracking.get(s[left]) - 1);
                };
                if (s[left] !== s[left + 1]) count--;
                left++;
            }
            max = Math.max(max, right - left + 1);
        }
    }
    return max;
};

export default characterReplacement;