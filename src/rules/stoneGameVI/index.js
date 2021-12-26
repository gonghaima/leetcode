/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */

// hint1: When one takes the stone, they not only get the points, but they take them away from the other player too.
// hint2: Greedily choose the stone with the maximum aliceValues[i] + bobValues[i].

/***********************************************************************************************
 * Runtime: 1360 ms, faster than 9.09% of JavaScript online submissions for Stone Game VI.     *
 * Memory Usage: 71.2 MB, less than 72.73% of JavaScript online submissions for Stone Game VI. *
 ***********************************************************************************************/

var stoneGameVI = function(aliceValues, bobValues) {
  const n = aliceValues.length;
  const summedVal = aliceValues
    .map((item, index) => [item + bobValues[index], index])
    .sort((a, b) => [b[0] - a[0]]);

  let aliceTotal = 0,
    bobTotal = 0;
  for (let idx = 0; idx < n; idx++) {
    if (idx % 2 === 0) {
      const [, aliceIdx] = summedVal[idx];
      aliceTotal += aliceValues[summedVal[idx][1]];
    } else {
      bobTotal += bobValues[summedVal[idx][1]];
    }
  }
  return aliceTotal === bobTotal ? 0 : aliceTotal > bobTotal ? 1 : -1;
};

export default stoneGameVI;
