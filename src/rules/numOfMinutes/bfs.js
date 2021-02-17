/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

/*********************************************************************************************************************
 *  Runtime: 328 ms, faster than 70.12% of JavaScript online submissions for Time Needed to Inform All Employees.    *
 * Memory Usage: 71.1 MB, less than 75.86% of JavaScript online submissions for Time Needed to Inform All Employees. *
 *********************************************************************************************************************/

const numOfMinutes = function (n, headID, manager, informTime) {

  let manages = {} // key: boss, val:[i1,i2...] where i subordinates of boss
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] === -1) continue
    if (manages[manager[i]] === undefined) manages[manager[i]] = [i]
    else manages[manager[i]].push(i)
  }

  let result = 0

  // pairs of [currentNode,timesoFar]
  let q = [[headID, 0]]
  while (q.length) {
    let tempu = []

    for (const [curr, it] of q) {
      if (manages[curr] === undefined) { //end of path, update result
        result = Math.max(result, it)
        continue
      }

      for (let i = 0; i < manages[curr].length; i++) {
        tempu.push([manages[curr][i], it + informTime[curr]])
      }

    }

    q = tempu;
  }
  return result;
};

export default numOfMinutes;