/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n, self) {

    let cur = n;
    let lookupHash = { 1: false, 2: true };
    if (self && divisorGame(cur)) {
        return true;
    } else {
        let tmpDevisibleNums = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) tmpDevisibleNums.push(n - i);
        };
        let results = [];
        while (tmpDevisibleNums.length) {
            const curNum = tmpDevisibleNums.pop();
            const curRes = divisorGame(curNum, !self);
            lookupHash[curNum] = curRes;
            results.push(curRes);
        }
        lookupHash[n] = results.includes(true);
    }
    return lookupHash[n];
};
export default divisorGame;


