/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/divisor-game/discuss/274608/Simple-DP-Java-Solution

var divisorGame = function (n) {
    for (let x = 1; x < n; x++)
        if (n % x == 0 && !divisorGame(n - x)) //if Bob fails, Alice wins
            return true;
    return false;
};
export default divisorGame;


