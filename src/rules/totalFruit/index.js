/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/****************************************************************************************************
 * Runtime: 128 ms, faster than 63.20% of JavaScript online submissions for Fruit Into Baskets.     *
 * Memory Usage: 49.2 MB, less than 66.13% of JavaScript online submissions for Fruit Into Baskets. *
 ****************************************************************************************************/

// sliding window
// https://leetcode.com/problems/fruit-into-baskets/discuss/600614/Fast-JavaScript-Solution
// https://leetcode.com/problems/fruit-into-baskets/discuss/170745/Problem%3A-Longest-Subarray-With-2-Elements

var totalFruit = function (tree) {
    let map = new Map(), max = -1
    for (let start = 0, end = 0; end < tree.length; end++) {
        let currElement = tree[end]
        map.set(currElement, map.get(currElement) + 1 || 1)
        while (map.size > 2) {
            let char = tree[start]
            let charCount = map.get(char)
            if (charCount - 1 === 0) map.delete(char)
            else map.set(char, charCount - 1)
            start++
        }
        if (map.size >= 1) max = Math.max(max, end + 1 - start)
    }
    return max
}

export default totalFruit;