/***********************************************************************************************************************
 * Runtime: 92 ms, faster than 75.00 % of JavaScript online submissions for Satisfiability of Equality Equations.      *
 * Memory Usage: 42.7 MB, less than 21.43 % of JavaScript online submissions for Satisfiability of Equality Equations. *
 ***********************************************************************************************************************/

export default (equations) => {
  let parent = new Map();
  const find = a => {
    parent.set(a, parent.get(a) || a);
    return parent.get(a) === a ? a : find(parent.get(a));
  }

  equations.forEach(([a, s, , b]) => {
    if (s === "=") {
      parent.set(find(a), find(b));
    }
  })

  for (let [a, s, , b] of equations) {
    if (s === "!") {
      if (find(a) === find(b)) return false;
    }
  }

  return true;
};
