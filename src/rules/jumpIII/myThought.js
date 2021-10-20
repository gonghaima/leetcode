/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// my thougts
// bfs - 
// 0. define variable to track visited index
//    define found = false
// 1. find the index with value 0
// add to next iteration array

// while loop (next.length && !found)
// 2. two pointers (left, right) to get all reachable indexes, 
// if no visited, 
  // add the reachable index into next iteration. 
  // check if the reachable index is the 'start' index, set found to true if it is.

// dfs - memo
// 0. define a variable to track visitied index, a variable found=false
// 1. start from 'start' index, recursion to keep find next reachable unvisited item, 
// if the the next reachable unvisited item has value 0, set found = true
// 2. return variable found


// dp 
// try to break down to sub problems
// 0. find the index with value 0
// 1. for each item
//     take it - the item index +(or -) item value, add to the tree
//    not take - not do anything...

// graph , union find.
// for each item, find & assign parent
// then check if the ancestor of 'start' index is the item with value 0

var canReach = function (arr, start) {
  return null;
};

export default canReach;