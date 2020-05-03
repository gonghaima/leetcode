export default (grid) => {
  let sortedGrid = {};
  let count = 0;
  let visited = {};
  let adjacencyObj = {};

  let resultObj = {};

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

  // initialize - change Edge lists into Adjacency lists
  grid.map(val => {
    const [val1, val2] = val;
    // console.log(`val1: ${val1}`);

    // for single value
    if (val2 === undefined) {
      adjacencyObj[val1] = [];
      return;
    }

    if (!adjacencyObj[val1])
      adjacencyObj[val1] = [val2]
    else
      adjacencyObj[val1].push(val2);

    if (!adjacencyObj[val2])
      adjacencyObj[val2] = [val1]
    else
      adjacencyObj[val2].push(val1);
  })

  console.log(JSON.stringify(adjacencyObj));

  let allKeys = Object.keys(adjacencyObj);
  let visitedKeys = [];
  let endResult = {};



  Object.keys(adjacencyObj).map((key, i) => {
    const k = Number(key);
    const currentAdjacency = adjacencyObj[k];
    // if not exist in end result, add it, mark as visited
    if (!endResult[k] && !visitedKeys.includes(k)) {
      endResult[k] = currentAdjacency;
      visitedKeys.push(k);

      let next = currentAdjacency;
      // bfs to group connected values into endResult
      while (next.length > 0) {
        let temp = [];
        next.map(val => {
          if (!visitedKeys.includes(val)) {
            visitedKeys.push(val);
            endResult[k] = endResult[k].concat(adjacencyObj[val]);
            temp = temp.concat(adjacencyObj[val]);
          }
        })
        next = temp;
      }
    }
  })

  //endResult
  // console.log(JSON.stringify(endResult));
  // return the number of the groups, which means the number of connected vertices
  return Object.keys(endResult).length;
};
