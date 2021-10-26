/**
 * bfs
 *
 * Initiate step 0, found = false, n = arr.length-1
 *
 * start with first index [0], keep find & add the following indexes
 * step ++
 *
 * i-1  (if i-1 ===n , found true)
 * i+1 (if i+1 ===n , found true)
 * indexes j where arr[i] === arr [j]     (if j ===n , found true)
 *
 * add to the next interation
 *
 *
 * return found?step:false;
 */