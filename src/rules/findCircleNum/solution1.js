const helper = function (mat, visited, i) {
  for (let j = 0; j < mat.length; j++) {
    if (mat[i][j] == 1 && visited[j] == false) {
      visited[j] = true
      helper(mat, visited, j)
    }
  }
}

export default M => {
  let visited = new Array(M.length).fill(false), cnt = 0
  for (let i = 0; i < M.length; i++) {
    if (visited[i] == false) {
      visited[i] = true
      helper(M, visited, i)
      cnt++
    }
  }
  return cnt
};
