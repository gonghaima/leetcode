export default (A) => {
  const triverseParams = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const xLimit = A[0].length;
  const yLimit = A.length;
  const inBoundary = (x, y) => {
    return x >= 0 && x < xLimit && y >= 0 && y < yLimit;
  }
  const onEdge = (x, y) => {
    return x === 0 || y === 0 || x === xLimit - 1 || y === yLimit - 1;
  }

  let counter = 0;
  let visited = new Set();

  let landGroupIndex = -1;
  let landGroup = {};
  let noneEnclaves = new Set();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      const element = A[i][j];
      if (!visited.has(`${i}${j}`) && element === 1) {
        visited.add(`${i}${j}`)
        landGroupIndex += 1;
        counter += 1;
        landGroup[landGroupIndex] = 1;
        if (onEdge(i, j)) noneEnclaves.add(landGroupIndex);
        let next = [];
        debugger;
        next.push([i, j]);

        while (next.length > 0) {
          let tempNext = [];
          next.map(([x, y]) => {
            visited.add(`${x}${y}`);
            triverseParams.map(([a, b]) => {
              const newX = a + x;
              const newY = b + y;
              const isIn = inBoundary(newX, newY);
              const hasVisited = visited.has(`${newX}${newY}`);
              if (isIn && !hasVisited && A[newX][newY] === 1) {
                visited.add(`${newX}${newY}`);
                landGroup[landGroupIndex] += 1;
                tempNext.push([newX, newY]);
              }
            })
          });
          next = tempNext;
        }


      }
      visited.add(`${i}${j}`)
    }
  }

  let total=0;
  debugger;
  Object.entries(landGroup).map(([key,val])=>{
    if(!noneEnclaves.has(Number(key))){
      total+=val;
    }
  });
  debugger;
  return total;
};
