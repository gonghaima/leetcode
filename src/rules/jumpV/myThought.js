/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

/**
 * 
 1. sort from low to high, with its index as mata data
 2. each item, from low to high, find out / memorize options, keep record the max value
 3. if memo exists, return value
 */

/**
 * 1. declare a global max, for each item, find out all the options, memo the max value for the index. Compare / asign global max
 * 2. declare a memo obj, if the item has been evaluated, return memorized value
 * 3. return gl
 */

/**
 * sort from low to high
 * 1. find the index of smallest value, mark it as 1 . set prev [];
 * 2. find the index of smallest, mark it as 1 if no prev found in range. mark it prev +1 if found in prev array
 * 3. keep doing the process, until all indexes are done.
 * 4. find the max value
 * 
 */

/**
 * 
 1. two pointers - for example, when d=2, (+d and -d will make the distance 5)
 2. start from left 0 right 3, iterating to the end.
 3. find out the 
 */

var maxJumps = function (arr, d) {
  return Infinity;
};

export default maxJumps;