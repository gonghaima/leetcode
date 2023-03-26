/**
 * @param {number[][]} points
 * @return {number}
 */
var angle = function(x1,y1,x2,y2)  {
  let y = y2 - y1
  let x = x2 - x1
  let theta = Math.atan2(y,x)
  theta *= 180 / Math.PI
  return theta
}
var maxPoints = function(points) {
  if (points.length === 1) return 1
  let max = 2
  for (let i = 0; i<points.length; i++) {
      let obj = {}
      for (let j = 0; j<points.length; j++) {
          if (i===j) continue;
          let diff = angle(points[i][0],points[i][1],points[j][0],points[j][1])
          obj[diff] = obj[diff] ? obj[diff]+1:2
      }
      max = Math.max(max, ...Object.values(obj))
  }
  return max
}
export default maxPoints;
