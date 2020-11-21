/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

/******************************************************************************************************
 * Runtime: 108 ms, faster than 91.24 % of JavaScript online submissions for Find the Town Judge.     *
 * Memory Usage: 46.7 MB, less than 53.28 % of JavaScript online submissions for Find the Town Judge. *
 ******************************************************************************************************/

export default (N, trust) => {
  let inDegree = new Array(N).fill(0);
  let outDegree = new Array(N).fill(0);
  for (let [giver, receiver] of trust) {
    outDegree[giver - 1]++;
    inDegree[receiver - 1]++;
  }
  for (let i = 0; i < N; i++) {
    if (inDegree[i] == N - 1 && outDegree[i] == 0) {
      return i + 1;
    }
  }
  return -1;
};

/***********************************************************************************************************************************************
 *                                                                                                                                             *
 * Time Complexity: O(max(E, N)), E = # of edges = # of arrays in trust                                                                        *
 * Space Complexity: O(N)                                                                                                                      *
 *                                                                                                                                             *
 * Everybody trusts town judge while town judge trusts nobody.                                                                                 *
 * Therefore, if we represent [a,b] in trust as a directed graph a -> b, the node with inDegree of V - 1 and outDegree of 0 is the town judge. *
 * If there is no such node, there is no town judge.                                                                                           *
 ***********************************************************************************************************************************************/