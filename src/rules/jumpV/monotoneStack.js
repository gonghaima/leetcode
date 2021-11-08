


/*********************************************************************************************
 *   Runtime: 100 ms, faster than 80.00% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 46.2 MB, less than 20.00% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

// https://leetcode.com/problems/jump-game-v/submissions/

const maxJumps = (arr, d) => {
    const LEN = arr.length;
    const cache = new Uint16Array(LEN);
    const map = Array.from({ length: LEN }, () => []);

    for (let left = 0, right = LEN - 1, ltop = -1, rtop = -1, lstack = new Uint16Array(LEN), rstack = new Uint16Array(LEN); left < LEN; ++left, --right) {
        ltop = upStack(lstack, ltop, left);
        rtop = upStack(rstack, rtop, right);
    }
    return Math.max(...arr.map((v, i) => helper(i)));

    function upStack(stack, top, i) {
        while (top >= 0 && arr[stack[top]] < arr[i]) {
            const idx = stack[top--];
            Math.abs(idx - i) <= d && map[i].push(idx);
        }
        stack[++top] = i;
        return top;
    }

    function helper(cur) {
        cache[cur] === 0 && (
            cache[cur] = 1 + (map[cur].length && Math.max(...map[cur].map(helper)))
        );
        return cache[cur];
    }
};

export default maxJumps;