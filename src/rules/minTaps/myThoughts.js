/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    return Infinity;
};

/**
 * create a new hash - key is position, value is minValue,  
 * iterating through each number, mark all the position with minValue 
 * (currentPoslition compare with existing value)
 * 
 * return the hash value from the last position
 */

/**
 * give [...rest, last]
 * min (dp[n-last] + 1    , dp[n-secondLast] + 2 , ... ) 
 */

/**
 * Two pointers
 * outside from 0 to end
 *      inside from 0 to outsideIndex
 *          compare & find the min value for each postion
 * 
 * Return the value for the last position
 */

export default minTaps;