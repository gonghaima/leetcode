/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// dfs

/***********************************************************************************************
 *   Runtime: 106 ms, faster than 41.39% of JavaScript online submissions for Jump Game III.   *
 * Memory Usage: 48.3 MB, less than 65.57% of JavaScript online submissions for Jump Game III. *
 ***********************************************************************************************/

// https://leetcode.com/problems/jump-game-iii/discuss/1532608/Java-DFS-solution-with-comments-or-DP-or-Dynamic-programming


const dfs = (arr, start, count) => {
  if (start < 0 || start >= arr.length)
    return false;//out of bounds
  if (count >= arr.length)
    return false;//we have already visited all of the elements
  if (arr[start] == 0)
    return true;//we found the 0 
  return dfs(arr, start + arr[start], count + 1) ||
    dfs(arr, start - arr[start], count + 1);//left

}

//O(2^n)TC exponential as we are making 2 calls to the recursive n times
var canReach = function (arr, start) {
  //intuition is similar to tree, we will try to go towars left of start
  //and see if we find 0 or towards right of start to see if we find 0
  //this is similar to the DFS we do on a tree
  //edge case : to avoid a cycle when there is no 0 found, we use a count var
  //to break the recursion if we visit all the elements of the array which is equal to length of array
  return dfs(arr, start, 0);
}

export default canReach;