/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*******************************************************************************************
 * Second solution: devide and conquer                                                     *
 * We assume that S = "abcd3" and K = 11                                                   *
 * we could find that index K-1 position in "abcdabcdabcd" is 'c'                          *
 * but we know final answer must be in one of "abcd" regardless of K if K <= lengthOf(S)   *
 * so we should find which position of "abcd" could be the answer                          *
 * the mod operation may satisfies our goal because position = 4 is equal to position = 0, *
 * finally we can make a conclusion                                                        *
 *    S = "abcd3", K = 11 is equal to S = "abcd", K = 3                                       *
 *    targetPosition = (K-1) % lengthOf(S)                                                    *
 *    recursive calculate the targetPosition until we get the correct answer                  *
 *******************************************************************************************/

/*********************************************************************************************************
 * Runtime: 70 ms, faster than 82.61% of JavaScript online submissions for Decoded String at Index.      *
 * Memory Usage: 42.3 MB, less than 34.78% of JavaScript online submissions for Decoded String at Index. *
 *********************************************************************************************************/

// https://leetcode.com/problems/decoded-string-at-index/discuss/980055/Javascript-or-Simple-6-Line-Solution-w-Explanation-or-100-100

var decodeAtIndex = function(s, k) {
  for (let i = 0, j = 0, n; true; i++)
    if (s[i] < 10) {
      n = ~~s[i] * j;
      if (k > n) j = n;
      else return decodeAtIndex(s, k % j || j);
    } else if (++j === k) return s[i];
};

export default decodeAtIndex;
