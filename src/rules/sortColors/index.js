/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      swap(mid, high);
      high--;
    }
  }

  return arr;

  function swap(a, b) {
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
};
export default sortColors;
