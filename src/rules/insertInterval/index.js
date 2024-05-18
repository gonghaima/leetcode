/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertInterval = function(intervals, newInterval) {
  let [start, end] = newInterval;
  let left = [];
  let right = [];

  for (const interval of intervals) {
    const [first, last] = interval;

    // current interval is smaller than newInterval
    if (last < start) left.push(interval);
    // current interval is larger than newInterval
    else if (first > end) right.push(interval);
    // there is a overlap
    else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }

  return [...left, [start, end], ...right];
};

export default insertInterval;
