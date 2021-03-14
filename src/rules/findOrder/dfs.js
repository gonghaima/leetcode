/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/****************************************************************************************************
 *  Runtime: 80 ms, faster than 99.87% of JavaScript online submissions for Course Schedule II.     *
 * Memory Usage: 42.3 MB, less than 91.01% of JavaScript online submissions for Course Schedule II. *
 ****************************************************************************************************/


var findOrder = function (numCourses, prerequisites) {
  let memo = {};
  let order = [];
  let visisted = new Set();
  prerequisites.forEach(([c, p]) => {
    if (c in memo) memo[c].push(p);
    else memo[c] = [p];
  });
  let arr = Array(numCourses).fill(null);
  const orderVisit = (course) => {
    if (!visisted.has(course)) {
      order.push(course);
      visisted.add(course);
    }
  }
  const backTrack = function (course) {
    if (!(course in memo)) {
      orderVisit(course);
      arr[course] = 2;
      return true;
    }
    if (arr[course] === 1) return false;
    if (arr[course] === 2) {
      orderVisit(course);
      arr[course] = 2;
      return true;
    }
    else {
      arr[course] = 1;
      for (const p of memo[course]) {
        if (!backTrack(p)) {
          return false;
        }
      }
      // inorder track
      orderVisit(course);
      arr[course] = 2;
      return true;
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visisted.has(i) && !backTrack(i)) return [];
  }
  return order;
};

export default findOrder;
