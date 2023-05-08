/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const a = nums;
  const n = a.length;

  a.sort((a, b) => a - b);

  let aa = [];
  let vis = new Set();
  for (let i = 0; i < n; i++) {
    let t = -a[i]; // target;
    for (let L = i + 1, R = n - 1; L < R; ) {
      let sum = a[L] + a[R];
      if (sum === t) {
        let key = `${a[i]} ${a[L]} ${a[R]}`;
        if (!vis.has(key)) {
          vis.add(key);
          aa.push([a[i], a[L], a[R]]);
        }
        L++;
      } else if (sum < t) {
        L++;
      } else {
        R--;
      }
    }
  }
  return aa;
};

export default threeSum;
