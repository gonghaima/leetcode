/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

/*********************************************************************************************************************
 *  Runtime: 412 ms, faster than 40.23% of JavaScript online submissions for Time Needed to Inform All Employees.    *
 * Memory Usage: 73.8 MB, less than 47.13% of JavaScript online submissions for Time Needed to Inform All Employees. *
 *********************************************************************************************************************/

const numOfMinutes = function (n, headID, manager, informTime) {
  if (n <= 0) return 0;
  let map = new Map();
  // key is boss' id, value is workers
  manager.forEach((m, e) => {
    if (m > -1) map.set(m, [...(map.get(m) || []), e])
  })

  function calTime(node) {
    let time = 0;
    // the manager exist
    if (map.has(node)) {
      // get all subordinates
      const subs = map.get(node);
      for (let i = 0; i < subs.length; i++) {
        //for each subordinate, find out the time required,
        // T(i) = T(manager[i]) + informTime[manager[i]]
        time = Math.max(time, informTime[node] + calTime(subs[i]))
        // the time needed for a message to reach the an employee is the time needed for a message to reach his manager 
        // + the time needed for the message to get from the manager to the employee himself.

        // then compare the current time required, find max
      }
    }
    return time;
  }
  return calTime(headID)
};

export default numOfMinutes;