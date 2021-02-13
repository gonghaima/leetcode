// not passing all cases
export default (A) => {
  const triverseParams = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const inBoundary = (x, y) => {
    return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
  }
  const onEdge = (x, y) => {
    return x === 0 || y === 0 || x === A.length - 1 || y === A[0].length - 1;
  }

  let counter = 0;
  let visited = new Set();

  let islandcount = 0;
  let islandGroup = {};
  let edgeGroup = new Set();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      const element = A[i][j];
      if (!visited.has(`${i}${j}`) && element === 1) {
        islandcount += 1;
        counter += 1;
        islandGroup[islandcount] = 1;
        if (onEdge(i, j)) edgeGroup.add(islandcount);
        visited.add(`${i}${j}`)
        let next = [];
        next.push([i, j]);

        while (next.length > 0) {
          let tempNext = [];
          next.map(([x, y]) => {
            if (A[x][y] === 1 && onEdge(x, y)) edgeGroup.add(islandcount);
            if (!visited.has(`${x}${y}`) && inBoundary(x, y) && A[x][y] === 1) islandGroup[islandcount] += 1;
            visited.add(`${x}${y}`);
            triverseParams.map(([a, b]) => {
              const newX = a + x;
              const newY = b + y;
              const isIn = inBoundary(newX, newY);
              const hasVisited = visited.has(`${newX}${newY}`);
              if (isIn && !hasVisited && A[newX][newY] === 1) {
                if (onEdge(newX, newX)) edgeGroup.add(islandcount);
                islandGroup[islandcount] += 1;
                tempNext.push([newX, newY]);
                visited.add(`${newX}${newY}`);
              }
            })
          });
          next = tempNext;
        }
      }
    }
  }

  let total = 0;
  debugger;
  Object.entries(islandGroup).map(([key, val]) => {
    if (!edgeGroup.has(Number(key))) {
      total += val;
    }
  });
  debugger;
  return total;
};
