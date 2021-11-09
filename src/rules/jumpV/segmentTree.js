/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

/*********************************************************************************************
 *   Runtime: 152 ms, faster than 16.67% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 46.6 MB, less than 16.67% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

//https://leetcode.com/problems/jump-game-v/submissions/

//https://cp-algorithms.com/data_structures/segment_tree.html

// Initial a segment tree.
// Traversal the sorted arr.
// Update the tree for each node.
// Query the whole range from the tree.


class SegmentTree {
  constructor(len) {
    this.data = new Array(len * 4);
    this.build(0, 0, len - 1);
  }
  build(cur, left, right) {
    if (left === right) { this.data[cur] = [left, right, 0]; return; }
    const mid = Math.floor((left + right) / 2);
    this.data[cur] = [left, right, 0];
    this.build(cur * 2 + 1, left, mid),
      this.build(cur * 2 + 2, mid + 1, right)
  }
  query(left, right, cur = 0) {
    const node = this.data[cur];
    if (node[0] === left && node[1] === right) return node[2];
    const mid = Math.floor((node[0] + node[1]) / 2);
    if (left > mid) return this.query(left, right, cur * 2 + 2);
    if (right <= mid) return this.query(left, right, cur * 2 + 1);
    return Math.max(
      this.query(left, mid, cur * 2 + 1),
      this.query(mid + 1, right, cur * 2 + 2),
    );
  }
  update(idx, value, cur = 0) {
    const node = this.data[cur];
    if (node[0] === node[1] && node[0] === idx) { node[2] = value; return; }
    const mid = Math.floor((node[0] + node[1]) / 2);
    this.update(idx, value, idx > mid ? cur * 2 + 2 : cur * 2 + 1);
    value > node[2] && (node[2] = value);
  }
}

var maxJumps = function (arr, d) {
  const LEN = arr.length;
  const tree = new SegmentTree(LEN);
  const sortedHeights = arr.map((val, idx) => [val, idx]).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const leftTops = new Int16Array(LEN);
  const rightTops = new Int16Array(LEN);

  for (let i = 0, j = LEN - 1, lstack = [], ltop = -1, rstack = [], rtop = -1; i < LEN; ++i, --j) {
    while (ltop >= 0 && arr[lstack[ltop]] < arr[i]) { lstack.pop(); --ltop; }
    leftTops[i] = ltop === -1 ? -1 : lstack[ltop];
    lstack[++ltop] = i;
    while (rtop >= 0 && arr[rstack[rtop]] < arr[j]) { rstack.pop(); --rtop; }
    rightTops[j] = rtop === -1 ? LEN : rstack[rtop];
    rstack[++rtop] = j;
  }
console.log(sortedHeights);
  for (const item of sortedHeights) {
    const idx = item[1];
    tree.update(idx, 1 + tree.query(
      Math.max(leftTops[idx] + 1, idx - d),
      Math.min(rightTops[idx] - 1, idx + d)
    ));
  }

  return tree.query(0, LEN - 1);
}

export default maxJumps;