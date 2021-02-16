/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

/*********************************************************************************************************************
 *  Runtime: 660 ms, faster than 14.94% of JavaScript online submissions for Time Needed to Inform All Employees.    *
 * Memory Usage: 79.3 MB, less than 34.48% of JavaScript online submissions for Time Needed to Inform All Employees. *
 *********************************************************************************************************************/


const numOfMinutes = function (n, headID, manager, informTime) {
  const employeesMap = new Map(Array.from(manager, (_, i) => [i, []]));
  for (const [i, head] of manager.entries()) {
    if (head !== -1) {
      employeesMap.get(head).push(i);
    }
  }
  return dfs(headID);

  function dfs(head) {
    // time required to reach to an employee  + time for him/her to reach direct subordinates
    return Math.max(0, ...employeesMap.get(head).map(dfs)) + informTime[head];
  }
};

export default numOfMinutes;