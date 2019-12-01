const checkConnected = (store, item) => {

}

const checkConnectionThenUpdateStore = (orgin, store, item) => {
  // console.log(store);

  if (store.length === 0) {
    store.push([item]);
    return store;
  }

  for (let r = 0; r < store.length; r++) {
    for (let c = 0; c < store[r].length; c++) {
      const cItem = store[r][c];
      if (
        ((orgin[cItem.pos.rIndex + 1] !== undefined && orgin[cItem.pos.rIndex + 1][cItem.pos.cIndex] !== undefined) && orgin[cItem.pos.rIndex + 1][cItem.pos.cIndex] === item.value) ||
        (orgin[cItem.pos.rIndex - 1] !== undefined && orgin[cItem.pos.rIndex - 1][cItem.pos.cIndex] !== undefined && orgin[cItem.pos.rIndex - 1][cItem.pos.cIndex] === item.value) ||
        (orgin[cItem.pos.rIndex] !== undefined && orgin[cItem.pos.rIndex][cItem.pos.cIndex + 1] !== undefined && orgin[cItem.pos.rIndex][cItem.pos.cIndex + 1] === item.value) ||
        (orgin[cItem.pos.rIndex] !== undefined && orgin[cItem.pos.rIndex][cItem.pos.cIndex - 1] !== undefined && orgin[cItem.pos.rIndex][cItem.pos.cIndex - 1] === item.value)
      ) {
        console.log('pushing to existing');

        store[r].push(item);
        return store;
      } else {
        console.log('pushing to new');

        store.push([item]);
        return store;
      }
    }
  }
  return store;
}

export default (grid) => {
  // console.log(grid);

  const rows = grid.length;
  const cols = grid[0].length;
  let resultSet = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // console.log(resultSet);
      resultSet = checkConnectionThenUpdateStore(grid, resultSet, { value: grid[r][c], pos: { rIndex: r, cIndex: c } })
    }
  }

  console.log(resultSet);

  return resultSet.length;
};

// (store[r + 1][c] !== undefined && store[r + 1][c] === item.value)
//   (store[r - 1][c] !== undefined && store[r - 1][c] === item.value)
//   (store[r][c + 1] !== undefined && store[r][c + 1] === item.value)
//   (store[r][c - 1] !== undefined && store[r][c - 1] === item.value)