/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

/*********************************************************************************************************************
 * Runtime: 128 ms, faster than 96.55% of JavaScript online submissions for Time Needed to Inform All Employees.     *
 * Memory Usage: 51.3 MB, less than 93.10% of JavaScript online submissions for Time Needed to Inform All Employees. *
 *********************************************************************************************************************/

const numOfMinutes = function (n, headID, manager, informTime) {

  let memo = new Array(n).fill(0);
  let ans = 0;

  function solve(emp) {
    if (memo[emp] != 0) return memo[emp];
    if (emp == headID) return 0;

    memo[emp] = informTime[manager[emp]] + solve(manager[emp]);
    return memo[emp];
  }

  for (let i = 0; i < n; i += 1) ans = Math.max(ans, solve(i));
  return ans;
};

export default numOfMinutes;

/*******************************************************************************************************************************************************************************************************************************************************************************************************************
 *                                                                                                                                                                                                                                                                                                                 *
 * The idea of this solution is very simple. We don't need to build the actual tree or a graph on even calculate the children of any node.                                                                                                                                                                         *
 *                                                                                                                                                                                                                                                                                                                 *
 * The solution relies of this very simple recurrence relation:                                                                                                                                                                                                                                                    *
 * let T(i) be the time needed for a message to reach the i-th employee, then:                                                                                                                                                                                                                                     *
 * T(i) = T(manager[i]) + informTime[manager[i]]                                                                                                                                                                                                                                                                   *
 *                                                                                                                                                                                                                                                                                                                 *
 * and the base case is T(headID) = 0                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                 *
 * in plain English, this says that the the time needed for a message to reach the an employee is the time needed for a message to reach his manager + the time needed for the message to get from the manager to the employee himself.                                                                            *
 *                                                                                                                                                                                                                                                                                                                 *
 * We just need to get the max of T(i) for all i.                                                                                                                                                                                                                                                                  *
 *                                                                                                                                                                                                                                                                                                                 *
 * We need to memoize the answers though because there could be repeated recursive calls. To see why, imagine we already calculated T(x) where x is an arbitrary employee, then when calculating T(y) where y is a child of x, we are going to need to calculate T(x) again because T(y) = T(x) + T(informTime[x]) *
 *                                                                                                                                                                                                                                                                                                                 *
 * The time complexity is O(n) since we visit any employee only once (we memoize solutions of visited employees) and space complexity is O(n) since we need a memoization array of size n.                                                                                                                         *
 *                                                                                                                                                                                                                                                                                                                 *
 * The solution is a top down solution because we build the solutions of larger problems (leaf nodes) using solutions of smaller sub problems (parents of leaf nodes)                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                 *
 *                                                                                                                                                                                                                                                                                                                 *
 *******************************************************************************************************************************************************************************************************************************************************************************************************************/