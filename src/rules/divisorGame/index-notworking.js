/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
    let lookupHash = { 1: false, 2: true };
    const findDivisorResult = (num, canWin, found, self) => {
        if (lookupHash[num] && lookupHash[num] === true) return self ? true : false;
        if (!lookupHash[num] && lookupHash[num] === false) return self ? false : true;
        let tmpDevisibleNums = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) tmpDevisibleNums.push(i);
        }
        let continueCalc = true;
        while (tmpDevisibleNums.length > 0 && continueCalc) {
            const currentNum = tmpDevisibleNums.pop();
            if (lookupHash[currentNum]) {
                continueCalc = false;
                lookupHash[num] = self ? true : false;
                found = true;
                canWin = true;
            };
            lookupHash[num] = findDivisorResult(num - currentNum, false, false, !self);
            // if (!lookupHash[currentNum] && lookupHash[currentNum] === false) continue;
        };
        return self ? false : true;
    }
    for (let i = 1; i <= n; i++) {
        if (!lookupHash[n] && !lookupHash[n] !== false) {
            lookupHash[n] = findDivisorResult(n, false, false, true);
        }
    }
    return lookupHash[n];
};
export default divisorGame;


