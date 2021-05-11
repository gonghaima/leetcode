/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // tracking character paramter, min
    let tracking = new Map(), min = [0, Number.MAX_SAFE_INTEGER], left = 0;
    const tSet = new Set(t);

    for (let right = 0; right < s.length; right++) {
        const ele = s[right];
        if (tSet.has(ele)) {
            tracking.set(ele, tracking.get(ele) + 1 || 1);
        }
        while (tSet.size === tracking.size) {
                let newGreater = right - left + 1 > min[1] - min[0];
                min = newGreater ? min : [left, right];
                const leftEl = s[left];
                if (tSet.has(leftEl)) {
                    if (tracking.get(leftEl) > 1) {
                        tracking.set(leftEl, tracking.get(leftEl) - 1);
                    } else {
                        tracking.delete(leftEl);
                    }
                }
                left++;
        }
    }
    const result = s.substring(min[0], min[1]+1);

    return result;
};
export default minWindow;