// 1. dfs
// initiate a visited list, and a nabour list
// loop through board, if item value is O, recursively find all connected nabours from up/down/left/right with O value
// for set, if one item has undefined nabours (up/down/left/right), remove from the parent set
// eset whole board into X, then for each parents, add items by turning X into O


// 2. union find
// build a graph, find all edges, union all 'O', build a parent set with coordinate
// check each parent set, if any one item has exceeded range nabour (undefined nabour), add the parent set to result
// reset whole board into X, then for each parents, add items by turning X into O


export default (board) => {
  return [[]];
};
