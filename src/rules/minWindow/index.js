/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // tracking character paramter, min
    let min = [0, Number.MAX_SAFE_INTEGER], left = 0;


    const remaining = new Map(); // t as map, keep removing, until all removed/empty
    const tTrack = new Map(); // t as map, never change, for tracking
    const currentWindow = new Map(); // current range, between left and right
    for (const char of t) {
        remaining.set(char, remaining.get(char) + 1 || 1);
        tTrack.set(char, tTrack.get(char) + 1 || 1);
    }

    for (let right = 0; right < s.length; right++) {
        const ele = s[right];
        currentWindow.set(ele, currentWindow.get(ele) + 1 || 1);
        if (remaining.has(ele)) {
            if (remaining.get(ele) > 1) remaining.set(ele, remaining.get(ele) - 1);
            else remaining.delete(ele);
        }
        while (remaining.size === 0) {
            let newGreater = right - left + 1 > min[1] - min[0];
            min = newGreater ? min : [left, right];
            const leftEl = s[left];

            if (currentWindow.get(leftEl) > 1) currentWindow.set(leftEl, currentWindow.get(leftEl) - 1);
            else currentWindow.delete(leftEl);

            if (tTrack.has(leftEl) && !currentWindow.has(leftEl)) {
                remaining.set(leftEl, 1);
            }

            left++;
        }

    }
    const result = min[1] - min[0] === Number.MAX_SAFE_INTEGER ? "" : s.substring(min[0], min[1] + 1);

    return result;
};
export default minWindow;