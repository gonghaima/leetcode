/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/***********************************************************************************************************************
 * My Thought: create a Map to stort result. For each item in strs, sort it as a key,                                  *
 * if the key already exist in Map, add the item in the value Array, otherwise, create a new entry with the Key,
 * an array containing the item as the first item *
 ***********************************************************************************************************************/

// https://leetcode.com/problems/group-anagrams/discuss/718955/Three-JS-Solutions

//  O(n*klog(k))

/**********************************************************************************************
 * Runtime: 223 ms, faster than 39.24% of JavaScript online submissions for Group Anagrams.   *
 * Memory Usage: 53 MB, less than 42.80% of JavaScript online submissions for Group Anagrams. *
 **********************************************************************************************/

var groupAnagrams = function(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str
      .split('')
      .sort()
      .join('');
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};
export default groupAnagrams;
