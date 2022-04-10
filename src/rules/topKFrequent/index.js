// hash - short

// https://leetcode.com/problems/top-k-frequent-words/discuss/864478/Easy-JS-Solution

/****************************************************************************************************
 * Runtime: 127 ms, faster than 32.54% of JavaScript online submissions for Top K Frequent Words.   *
 * Memory Usage: 47 MB, less than 53.64% of JavaScript online submissions for Top K Frequent Words. *
 ****************************************************************************************************/

var topKFrequent = function(words, k) {
    let m = new Map();
    words.forEach(word => m.set(word, m.get(word)+1 || 1));
    let arr = Array.from(m.entries()).sort((a,b) => {
					return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1]-a[1];
					}).slice(0,k).map(pair => pair[0]);
    return arr;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};

export default topKFrequent;
