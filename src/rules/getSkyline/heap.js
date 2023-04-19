/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// https://leet-codes.blogspot.com/2022/09/218-skyline-problem.html

var getSkyline = function(buildings) {
  function dnc(b, e) {
    if (b == e)
      return [
        [buildings[b][0], buildings[b][2]],
        [buildings[b][1], 0],
      ];
    let left = dnc(b, b + Number.parseInt((e - b) / 2)),
      right = dnc(b + Math.floor((e - b) / 2) + 1, e),
      res = [],
      lp = 0,
      rp = 0,
      le = left.length - 1,
      re = right.length - 1,
      lch = [0, 0],
      rch = [0, 0],
      cur;
    while (lp <= le && rp <= re) {
      if (left[lp][0] < right[rp][0]) {
        cur = [left[lp][0], Math.max(rch[1], left[lp][1])];
        lch = left[lp++];
      } else if (left[lp][0] > right[rp][0]) {
        cur = [right[rp][0], Math.max(lch[1], right[rp][1])];
        rch = right[rp++];
      } else {
        cur = [right[rp][0], Math.max(left[lp][1], right[rp][1])];
        (lch = left[lp++]), (rch = right[rp++]);
      }
      if (res[res.length - 1]?.[1] !== cur[1]) res.push(cur);
    }
    while (lp <= le) res.push(left[lp++]);
    while (rp <= re) res.push(right[rp++]);
    return res;
  }
  return dnc(0, buildings.length - 1);
};

export default getSkyline;
