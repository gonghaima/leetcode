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

/************************************************************************************************
 * Runtime: 163 ms, faster than 74.21% of JavaScript online submissions for Group Anagrams.     *
 * Memory Usage: 53.6 MB, less than 30.07% of JavaScript online submissions for Group Anagrams. *
 ************************************************************************************************/

//  O(n*k)

// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)

var groupAnagrams = function(strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join('#');
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
export default groupAnagrams;
