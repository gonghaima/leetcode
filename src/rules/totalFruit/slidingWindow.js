/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/****************************************************************************************************
 * Runtime: 96 ms, faster than 94.35% of JavaScript online submissions for Fruit Into Baskets.      *
 * Memory Usage: 47.1 MB, less than 79.57% of JavaScript online submissions for Fruit Into Baskets. *
 ****************************************************************************************************/

// sliding window
// https://leetcode.com/problems/fruit-into-baskets/discuss/284862/JavaScript-Solution-%3A-O(n)

var totalFruit = function (tree) {
    let result = 0;
    let currentTotal = 0;
    let countLastFruit = 0;
    let firstFruit = 0;
    let lastFruit = 0;

    for (let fruit of tree) {
        currentTotal = (fruit === firstFruit || fruit === lastFruit) ? currentTotal + 1 : countLastFruit + 1;
        countLastFruit = (fruit === lastFruit) ? countLastFruit + 1 : 1;
        if (lastFruit !== fruit) {
            firstFruit = lastFruit;
            lastFruit = fruit;
        }
        result = Math.max(result, currentTotal);
    }
    return result;
}

export default totalFruit;