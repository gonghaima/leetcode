/**
 * @param {number[]} arr
 * @return {number}
 */


// https://leetcode.com/problems/jump-game-iv/discuss/989528/Fast-and-lean-javascript
// TLE on submit

var minJumps = function (arr) {
  if (arr.length === 1) return 0;
  const sameValIdx = new Map();
  for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i];
    if (!sameValIdx.has(val)) sameValIdx.set(val, []);
    sameValIdx.get(val).push(i);
  }

  const seen = new Set();
  seen.add(0);
  const queue = [[0, 0]];
  while (queue.length) {
    const [idx, step] = queue.shift();

    if (idx - 1 >= 0 && !seen.has(idx - 1)) {
      queue.push([idx - 1, step + 1]);
      seen.add(idx - 1);
    }
    if (idx + 1 < arr.length && !seen.has(idx + 1)) {
      if (idx + 1 === arr.length - 1) return step + 1; // You have to check here to handle this case [7,7,7,7,7...]
      queue.push([idx + 1, step + 1]);
      seen.add(idx + 1);
    }

    const targetArr = sameValIdx.get(arr[idx]);
    for (let j = 0; j < targetArr.length; j++) {
      const i = targetArr[j];
      if (!seen.has(i) && i !== idx - 1 && i !== idx + 1) {
        if (i === arr.length - 1) return step + 1; // You have to check here to handle this case [7,7,7,7,7...]
        queue.push([i, step + 1]);
        seen.add(i);
      }
    }
  }
};

export default minJumps;