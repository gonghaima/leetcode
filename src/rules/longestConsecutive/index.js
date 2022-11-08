/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************************************************************************************************
 * Runtime: 202 ms, faster than 64.03% of JavaScript online submissions for Longest Consecutive Sequence.    *
 * Memory Usage: 75.4 MB, less than 7.51% of JavaScript online submissions for Longest Consecutive Sequence. *
 *************************************************************************************************************/

// https://leetcode.com/problems/longest-consecutive-sequence/discuss/807892/Just-an-other-implementation-using-union-find
//

class UnionFind {
  constructor(arr) {
    [this.parentMap, this.rankMap] = this.initialise(arr);
  }

  initialise(arr) {
    let parentMap = new Map();
    let rankMap = new Map();
    arr.forEach((val) => {
      parentMap.set(val, val);
      rankMap.set(val, 1);
    });
    return [parentMap, rankMap];
  }

  find(val) {
    if (this.parentMap.get(val) === val) return val;
    this.parentMap.set(val, this.find(this.parentMap.get(val)));
    return this.parentMap.get(val);
  }

  union(m, n) {
    const rootM = this.find(m);
    const rootN = this.find(n);

    if (rootM === rootN) return;
    if (this.rankMap.get(rootN) > this.rankMap.get(rootM)) {
      this.updateParent(rootM, rootN);
    } else {
      this.updateParent(rootN, rootM);
    }
  }

  updateParent(child, parent) {
    this.rankMap.set(
      parent,
      this.rankMap.get(parent) + this.rankMap.get(child)
    );
    this.parentMap.set(child, parent);
  }
}

var longestConsecutive = function(nums) {
  const unionFind = new UnionFind(nums);

  for (let num of nums) {
    if (unionFind.parentMap.has(num - 1)) {
      unionFind.union(num - 1, num);
    }
  }

  let max = 0;
  for (let num of nums) {
    max = Math.max(max, unionFind.rankMap.get(num));
  }

  return max;
};

export default longestConsecutive;
