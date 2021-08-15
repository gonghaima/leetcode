/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    const dirs = [
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
    ];
    // possibility []
    const possibility = [];

    // validity check util
    const isValid = (arr, x, y) => {
        return (arr[x] && arr[x][y] && arr[x][y]) || false;
    };
    // initialize a tracking
    const arr = [...Array(n)].map(_ => new Array(n).fill(1));
    // loop through k
    // in each loop
    // check how many directions are valid
    // devide by 8
    // add into possibility array
    let currentPosition = [[row, column]];
    for (let i = 0; i < k; i++) {
        let temp = [];
        let currentPossibility = 0;
        for (const [r, c] of currentPosition) {
            //debugger;
            let ableToMoveCount = 0;
            for (const [modX, modY] of dirs) {
                if (isValid(arr, r + modX, c + modY)) {
                    ableToMoveCount++;
                    temp.push([r + modX, c + modY]);
                }
            };
            // debugger;
            currentPossibility += ableToMoveCount / 8 / currentPosition.length;
        };
        possibility.push(currentPossibility);
        debugger;
        currentPosition = temp;
    }
    // multiple all the items in the array, return the result
    let result = 1;
    for (const p of possibility) {
        result *= p;
    };

    return result;
};

export default knightProbability;