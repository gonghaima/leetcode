/**
 * @param {number[]} arr
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 308 ms, faster than 60.71% of JavaScript online submissions for Jump Game IV.   *
 * Memory Usage: 68.7 MB, less than 76.79% of JavaScript online submissions for Jump Game IV. *
 **********************************************************************************************/

var minJumps = function (arr) {
  let q = new Set([0]), level = 0, f = {}, n = arr.length, seen = new Set(), result = Infinity;
  for (let i = 0; i < n; i++) // create groups of indices with the same value
    if (!f[arr[i]])
      f[arr[i]] = [i]
    else
      f[arr[i]].push(i)
  while (result === Infinity) { // process each BFS level seperately
    let temp = new Set //holds the indices of the next level
    q.forEach(idx => {
      if (idx == n - 1)
        return result = level
      //process each valid neighbor only once
      for (let nei of [idx - 1, idx + 1, ...f[arr[idx]]])
        if (!seen.has(nei) && nei >= 0 && nei < n)
          seen.add(nei), temp.add(nei),
            f[arr[idx]] = [-1] //and invalidate the Value-neighbors previously processed
    })
    q = temp, level++
  }
  return result
};


export default minJumps;