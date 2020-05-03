export default (grid) => {
  let sortedGrid = {};
  let count = 0;
  let visited = {};

  const hashAndDataSort = arr => {
    let sortedArr;
    let hashedVal;
    arr[1] ?
      (arr[1] > arr[0]) ?
        (hashedVal = (arr[0] + "-" + arr[1]) && (sortedArr = [arr[0], arr[1]]))
        : hashedVal = (arr[1] + "-" + arr[0]) && (sortedArr = [arr[1], arr[0]])
      : (hashedVal = arr[0] && (sortedArr = arr[0]));
    return { hashedVal, sortedArr };
  }

  // initialize
  grid.map(val => {
    const { hashedVal, sortedArr } = hashAndDataSort(val);
    const formatted = {};
    sortedGrid[hashedVal] = sortedArr;
  })

  const dfs = (sortedGrid, k) => {
    const at = sortedGrid[k][0];
    const next = sortedGrid[k][1] ? sortedGrid[k][1] : null;
    visited[k] = true;
    if (!visited[k]) {
      dfs(sortedGrid, next);
    }
  }


  // for (let i = 0; i < sortedGrid.length; i++) {
  //   const element = sortedGrid[i];
  //   const elementKey = Object.keys(element)[0];
  //   if (!visited[elementKey]) {
  //     count += 1;

  //   }
  // }

  Object.keys(sortedGrid).map((k, i) => {
    const element = sortedGrid[k];
    if (!visited[k]) {
      count += 1;
      dfs(sortedGrid, k);
    }
  })


  return count;
};
