// 1. dfs
// initiate a visited list, and a nabour list
// loop through board, if item value is O, recursively find all connected nabours from up/down/left/right with O value
// for set, if one item has undefined nabours (up/down/left/right), remove from the parent set
// eset whole board into X, then for each parents, add items by turning X into O


// 2. union find
// build a graph, find all edges, union all 'O', build a parent set with coordinate
// check each parent set, if any one item has exceeded range nabour (undefined nabour), add the parent set to result
// reset whole board into X, then for each parents, add items by turning X into O

// find all neighbours
const getNeighbours = (i, j, xLimit, yLimit) => {
  const result = [];
  if ((i - 1) >= 0 && (i - 1) < xLimit) result.push([(i - 1), j]);
  if ((i + 1) >= 0 && (i + 1) < xLimit) result.push([(i + 1), j]);
  if ((j - 1) >= 0 && (j - 1) < yLimit) result.push([i, (j - 1)]);
  if ((j + 1) >= 0 && (j + 1) < yLimit) result.push([i, (j + 1)]);
  return result;
}

export default (board) => {
  let visited = new Set();
  // track/group items to regions
  let regions = {};
  let regionsKey = 0;

  // loop through each item
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // set next to current item, if it hasn't been visited
      const next = visited.has(i + "" + j) ? [] : [i + "" + j];
      // if visited, set next to empty
      if (visited.has(i + "" + j)) {
        next = [];
      } else if (board[i][j] === "X") { //if X, set visited, set next empty
        visited.add(i + "" + j);
        next = [];
      }
      else { //else it is O, also unvisited
        // add current item into next
        next = [i + "" + j];
        //set as visited
        visited.add(i + "" + j);
        //set a new region, add the item into the region
        regionsKey += 1;
        regions[regionsKey] = new Set();
        regions[regionsKey].add(i + "" + j);
        // if the item is on an edge, it means it is not sournded by X
        // add a null value into the region, to indicate that.
        if (i === 0 || j === 0 || j === board[0].length - 1 || i === board.length - 1) regions[regionsKey].add(null);
      }
      // loop through next, keep finding region items
      while (next.length > 0) {
        // temp value for the items to be visited
        let holderNext = [];
        next.map(stringIndex => {
          // get all neighbours
          const neighbours = getNeighbours(Number(stringIndex[0]), Number(stringIndex[1]), board.length, board[0].length);
          neighbours.map(([x, y]) => {
            // if the neighbour hasn't been visited, also X
            if (board[x][y] === "O" && !visited.has(x + "" + y)) {
              // add it to holderNext, to be visited
              holderNext.push(x + "" + y);
              // add it into current region
              regions[regionsKey].add(x + "" + y);
              // if the item is on an edge, it means it is not sournded by X
              // add a null value into the region, to indicate that.
              if (x === 0 || y === 0 || y === board[0].length - 1 || x === board.length - 1) regions[regionsKey].add(null);
            }
            // set the neighbour as visited
            visited.add(x + "" + y);
          })
        });
        // set values to be checked
        next = holderNext;
      }
    }

  }
  debugger;
  // get regions with null, it means it is not surrounded by X
  const noneSurroundedRegion = [];
  Object.values(regions).map(region => {
    if (region.has(null)) noneSurroundedRegion.push([...region]);
  })

  // initiate whole area to be X
  // const newArea = new Array(board.length).fill(new Array(board[0].length).fill("X"));
  const newArea = [...Array(board.length)].map(x => Array(board[0].length).fill("X"))  

  // set none surrounded to be O
  if(noneSurroundedRegion.length>0){
    noneSurroundedRegion.map(rgList=>{
      rgList.map(rg=>{
        if (rg) {
          const xCoordinate = Number(rg[0]);
          const yCoordinate = Number(rg[1]);
          newArea[xCoordinate][yCoordinate] = "O";
        }
      })
    });
  }
  return newArea;
};
