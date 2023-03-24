/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let max = 0;
    for (const x of points) {
      const slopes = new Map();
    for (const y of points) {
      if (x === y) continue;
      let slope = Infinity;
      if (y[0] - x[0] !== 0) {
        slope = (y[1] - x[1]) / (y[0] - x[0]);
      }
      if (slopes.has(slope)) {
        slopes.set(slope, slopes.get(slope) + 1);
      } else {
        slopes.set(slope, 1);
      }
      max = Math.max(max, slopes.get(slope));
    }
  }
  return max + 1;
};
export default maxPoints;
