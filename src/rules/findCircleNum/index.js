export default M => {

  let dfs = function (n, visited) {
    let list = M[n];
    for (let i = 0; i < list.length; i++) {
      if (list[i] != 0 && !visited.has(i)) {
        visited.add(i);
        dfs(i, visited);
      }
    }
  }

  let s = M.length, visited = new Set();
  let count = 0;
  for (let i = 0; i < s; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      dfs(i, visited);
      count++;
    }
  }
  return count;
};
