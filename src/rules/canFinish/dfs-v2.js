/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*************************************************************************************************
 * Runtime: 84 ms, faster than 97.90% of JavaScript online submissions for Course Schedule.      *
 * Memory Usage: 41.9 MB, less than 94.36% of JavaScript online submissions for Course Schedule. *
 *************************************************************************************************/

var canFinish = function (numCourses, prerequisites) {
  let memo = {};
  prerequisites.forEach(([c, p]) => {
    if (c in memo) memo[c].push(p);
    else memo[c] = [p];
  });
  let arr = Array(numCourses).fill(null);
  const backTrack = function (course) {
    if (!(course in memo)) {
      arr[course] = 2;
      return true;
    }
    if (arr[course] === 1) return false;
    if (arr[course] === 2) return true;
    else {
      arr[course] = 1;
      for (const p of memo[course]) {
        if (!backTrack(p)) {
          return false;
        }
      }
      // inorder track
      arr[course] = 2;
      return true;
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (!backTrack(i)) return false;
  }
  return true;
};

export default canFinish;

/***************************************************************************************************************
 * Create a HashTable with course as key and its prerequisites as Array of values.                             *
 * Create a DFS function that will take a course as starting point and try to explore all the nodes.           *
 * Inorder to track the cycle mark all the visited nodes to 1 and all the nodes that leads to a dead end to 2. *
 * If you ever encounter 1 return false. That means there is a cycle present in the problem.                   *
 ***************************************************************************************************************/