/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeIntervals = function(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    const endPrev = result.at(-1)[1];
    if (start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
    else result.push([start, end]);
  }
  return result;
};

export default mergeIntervals;
