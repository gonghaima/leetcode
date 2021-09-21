/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const cache = new Map();
    const dp = (s, e) => {
        // all the combinations
        if (cache.has([s, e])) return cache([s, e]);
        if (s < 0 || s > e) return 0;
        if (e > nums.length) return 0;
        cache.set([s, e], dp(s + 1));
    };
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            cache.add(dp(0, j).concat(dp(j, i)));
        }

    };

    return [...cache];
};

export default subsets;