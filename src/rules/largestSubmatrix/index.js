/****************************************************************************************************
 * Runtime: 100 ms, faster than 81.07% of JavaScript online submissions for Max Area of Island.     *
 * Memory Usage: 43.1 MB, less than 34.89% of JavaScript online submissions for Max Area of Island. *
 ****************************************************************************************************/

export default (matrix) => {
  const M = matrix;
  let y = M.length, x = M[0].length, ans = 0
  for (let i = 1; i < y; i++)
    for (let j = 0; j < x; j++)
      if (M[i][j]) M[i][j] += M[i - 1][j]
  for (let i = 0; i < y; i++) {
    let row = M[i].sort((a, b) => b - a)
    for (let j = 0; j < x; j++)
      ans = Math.max(ans, (j + 1) * row[j])
  }
  return ans
};
