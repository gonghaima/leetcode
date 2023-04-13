/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  var res = [],
    x = [],
    t = 0;
  buildings.forEach((v) => (x.push(v[0]), x.push(v[1])));
  for (let c of x.sort((a, b) => a - b))
    if (
      res[res.length - 1]?.[1] !==
      (t = buildings.reduce(
        (m, [b, e, h]) => (b <= c && c < e && h > m ? h : m),
        0
      ))
    )
      res.push([c, t]);
  return res;
};

export default getSkyline;
