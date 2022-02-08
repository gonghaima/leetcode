# Leetcode Solutions with JavaScript [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) [![Build Status](https://travis-ci.com/gonghaima/leetcode.svg?branch=master)](https://travis-ci.com/gonghaima/leetcode)

## Graph Problems

### Union Find

Identify if problems talks about finding groups or components.

- [547. Number of Provinces](https://leetcode.com/problems/friend-circles/) => [findCircleNum](./src/rules/findCircleNum/index.js)
- [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) => [findRedundantConnection](./src/rules/findRedundantConnection/index.js)
- [947. Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) => [removeStones](./src/rules/removeStones/index.js)
- [makeConnected](https://leetcode.com/problems/-number-of-operations-to-make-network-connected/)
- [equationsPossible](https://leetcode.com/problems/satisfiability-of-equality-equations/)
- [accountsMerge](https://leetcode.com/problems/accounts-merge/)

### DFS

- 1727. [Largest Submatrix With Rearrangements](https://leetcode.com/problems/largest-submatrix-with-rearrangements/) => [largestSubmatrix](./src/rules/largestSubmatrix/index.js)

#### DFS from boundary

- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) => [solve](./src/rules/surroundedRegions/index.js)
- 1020. [Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) => [numEnclaves](./src/rules/numEnclaves/index.js)

#### DFS - Time taken to reach all nodes or share information to all graph nodes

- [1376. Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/) => [solve](./src/rules/numOfMinutes/index.js)

#### DFS - from each unvisited node/Island problems

- [1254. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) => [closedIsland](./src/rules/closedIsland/index.js)
- [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) => [solve](./src/rules/numIslands/index.js)
- [841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) => [solve](./src/rules/canVisitAllRooms/index.js)
- [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/) => [solve](./src/rules/maxAreaOfIsland/index.js)
- [733. Flood Fill](https://leetcode.com/problems/flood-fill/) => [solve](./src/rules/floodFill/index.js)

#### DFS - Cycle Find

- [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) => [eventualSafeNodes](./src/rules/eventualSafeNodes/index.js)

### BFS

#### BFS - Shortest Path

- [542. 01 Matrix](https://leetcode.com/problems/01-matrix/) => [updateMatrix](./src/rules/updateMatrix/index.js)
- [1162. As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) => [maxDistance](./src/rules/maxDistance/index.js)
- [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) => [orangesRotting](./src/rules/orangesRotting/index.js)
- [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) => [shortestPathBinaryMatrix](./src/rules/shortestPathBinaryMatrix/index.js)

### Graph coloring/Bipartition

- [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) => [possibleBipartition](./src/rules/possibleBipartition/index.js)
- [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) => [isBipartite](./src/rules/isBipartite/index.js)

### Topological Sort

- [207. Course Schedule](https://leetcode.com/problems/course-schedule/) => [canFinish](./src/rules/canFinish/index.js)

### Find Shortest Path (Dijkstra's/Bellman Ford)

- [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) => [networkDelayTime](./src/rules/networkDelayTime/dijikstra.js)
- [1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) => [findTheCity](./src/rules/findTheCity/dijikstra.js)
- [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) => [findCheapestPrice](./src/rules/findCheapestPrice/dijikstra.js)

## Sliding Window

- [1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) => [longestSubarray](./src/rules/longestSubarray/index.js)
- [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/) => [numberOfSubstrings](./src/rules/numberOfSubstrings/index.js)
- [1234. Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/) => [balancedString](./src/rules/balancedString/index.js)
- [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) => [longestOnes](./src/rules/longestOnes/index.js)
- [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) => [subarraysWithKDistinct](./src/rules/subarraysWithKDistinct/index.js)
- [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) => [totalFruit](./src/rules/totalFruit/index.js)
- [1208. Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/) => [equalSubstring](./src/rules/equalSubstring/index.js)
- [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) => [characterReplacement](./src/rules/characterReplacement/index.js)
- [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) => [shortestSubarray](./src/rules/shortestSubarray/index.js)
- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) => [minSubArrayLen](./src/rules/minSubArrayLen/index.js)
- [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)=> [maxSlidingWindow](./src/rules/maxSlidingWindow/index.js)
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)=> [minWindow](./src/rules/minWindow/index.js)

## Dynamic programming

### Linear DP

- [91. Decode Ways](https://leetcode.com/problems/decode-ways/) => [numDecodings](./src/rules/numDecodings/index.js)
- [639. Decode Ways II](https://leetcode.com/problems/decode-ways-ii/) => [numDecodings2](./src/rules/numDecodings2/index.js)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) =>(./src/rules/numTrees/index.js)
- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) =>[maxProfit](./src/rules/maxProfit/index.js) kadane's (max subArray of currentIndex is either current item value, or currentItemValue + maxSubArrValueTillPreviousIndex)
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) =>[maxProfitII](./src/rules/maxProfitII/index.js)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) =>[maxProfitIII](./src/rules/maxProfitIII/index.js)
- [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)=>[maxProfitIV](./src/rules/maxProfitIV/index.js)
- [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)=>[maxProfitTransaction](./src/rules/maxProfitTransaction/index.js)
- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) =>[maxSubArray](./src/rules/maxSubArray/index.js)
- [198. House Robber](https://leetcode.com/problems/house-robber/) =>[rob](./src/rules/rob/index.js)
- [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)=>[numSquares](./src/rules/numSquares/index.js)
- [322. Coin Change](https://leetcode.com/problems/coin-change/)=>[coinChange](./src/rules/coinChange/index.js)
- [518. Coin Change 2](https://leetcode.com/problems/coin-change-2/) => [coinChange2](./src/rules/coinChange2/index.js)
- [343. Integer Break](https://leetcode.com/problems/integer-break/) => [integerBreak](./src/rules/integerBreak/index.js)
- [357. Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/) => [countNumbersWithUniqueDigits](./src/rules/countNumbersWithUniqueDigits/index.js)
- [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) => [wiggleMaxLength](./src/rules/wiggleMaxLength/index.js)
- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) => [canPartition](./src/rules/canPartition/index.js)
- [698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) => [canPartitionKSubsets](./src/rules/canPartitionKSubsets/index.js)
- [338. Counting Bits](https://leetcode.com/problems/counting-bits/) => [countBits](./src/rules/countBits/index.js)
- [551. Student Attendance Record I](https://leetcode.com/problems/student-attendance-record-i/) => [checkRecord](./src/rules/checkRecord/index.js)
- [552. Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/) => [checkRecord2](./src/rules/checkRecord2/index.js)
- [646. Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/) => [findLongestChain](./src/rules/findLongestChain/index.js)
- [740. Delete and Earn](https://leetcode.com/problems/delete-and-earn/) => [deleteAndEarn](./src/rules/deleteAndEarn/index.js)
- [790. Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/) => [numTilings](./src/rules/numTilings/index.js)
- [935. Knight Dialer](https://leetcode.com/problems/knight-dialer/) => [knightDialer](./src/rules/knightDialer/index.js)
- [688. Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/) =>[knightProbability](./src/rules/knightProbability/index.js)
- [982. Triples with Bitwise AND Equal To Zero](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/) => [countTriplets](./src/rules/countTriplets/index.js)
- [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) => [mincostTickets](./src/rules/mincostTickets/index.js)
- [1025. Divisor Game](https://leetcode.com/problems/divisor-game/) => [divisorGame](./src/rules/divisorGame/index.js)
- [1043. Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/) => [maxSumAfterPartitioning](./src/rules/maxSumAfterPartitioning/index.js)
- [1105. Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/) => [minHeightShelves](./src/rules/minHeightShelves/index.js)
- [1218. Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/) => [longestSubsequence](./src/rules/longestSubsequence/index.js)
- [1235. Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) => [jobScheduling](./src/rules/jobScheduling/index.js)
- [1262. Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/) => [maxSumDivThree](./src/rules/maxSumDivThree/index.js)
- [78. Subsets](https://leetcode.com/problems/subsets/) => [subsets](./src/rules/subsets/index.js)
- [90. Subsets II](https://leetcode.com/problems/subsets-ii/) => [subsetsWithDup](./src/rules/subsetsWithDup/index.js)
- [1326. Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) => [minTaps](./src/rules/minTaps/index.js)
- [55. Jump Game](https://leetcode.com/problems/jump-game/) => [jump](./src/rules/jump/index.js)
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) => [jumpII](./src/rules/jumpII/index.js)
- [1306. Jump Game III](https://leetcode.com/problems/jump-game-iii/) => [jumpIII](./src/rules/jumpIII/index.js)
- [1345. Jump Game IV](https://leetcode.com/problems/jump-game-iv/) => [jumpIV](./src/rules/jumpIV/index.js)
- [1340. Jump Game V](https://leetcode.com/problems/jump-game-v/) => [jumpV](./src/rules/jumpV/index.js)
- [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/) => [jumpVI](./src/rules/jumpVI/index.js)
- [1696. Jump Game VII](https://leetcode.com/problems/jump-game-vii/) => [jumpVII](./src/rules/jumpVII/index.js)
- [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) => [maxSubarraySumCircular](./src/rules/maxSubarraySumCircular/index.js)
- [1359. Count All Valid Pickup and Delivery Options](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/) => [countOrders](./src/rules/countOrders/index.js)
- [1416. Restore The Array](https://leetcode.com/problems/restore-the-array/) => [numberOfArrays](./src/rules/numberOfArrays/index.js)
- [877. Stone Game](https://leetcode.com/problems/stone-game/) => [stoneGame](./src/rules/stoneGame/index.js)
- [1140. Stone Game II](https://leetcode.com/problems/stone-game-ii/) => [stoneGameII](./src/rules/stoneGameII/index.js)
- [1406. Stone Game III](https://leetcode.com/problems/stone-game-iii/) => [stoneGameIII](./src/rules/stoneGameIII/index.js)
- [1510. Stone Game IV](https://leetcode.com/problems/stone-game-iv/) => [stoneGameIV](./src/rules/stoneGameIV/index.js)
- [1563. Stone Game V](https://leetcode.com/problems/stone-game-v/) => [stoneGameV](./src/rules/stoneGameV/index.js)
- [1686. Stone Game VI](https://leetcode.com/problems/stone-game-vi/) => [stoneGameVI](./src/rules/stoneGameVI/index.js)
- [1690. Stone Game VII](https://leetcode.com/problems/stone-game-vii/) => [stoneGameVII](./src/rules/stoneGameVII/index.js)
- [1872. Stone Game VIII](https://leetcode.com/problems/stone-game-viii/) => [stoneGameVIII](./src/rules/stoneGameVIII/index.js)
- [2029. Stone Game IX](https://leetcode.com/problems/stone-game-ix/) => [stoneGameIX](./src/rules/stoneGameIX/index.js)

### DP 1

- [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) => [maxProduct](./src/rules/maxProduct/index.js)
- [1567. Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/) => [getMaxLen](./src/rules/getMaxLen/index.js)
- [1014. Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/) => [maxScoreSightseeingPair](./src/rules/maxScoreSightseeingPair/index.js)
- [139. Word Break](https://leetcode.com/problems/word-break/) => [wordBreak](./src/rules/wordBreak/index.js)
- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) => [trap](./src/rules/trap/index.js)
- [264. Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) => [uglyNumberII](./src/rules/uglyNumberII/index.js)
- [120. Triangle](https://leetcode.com/problems/triangle/) => [minimumTotal](./src/rules/minimumTotal/index.js)
- [1314. Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/) => [minimumTotal](./src/rules/minimumTotal/index.js)
- [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) => [matrixBlockSum](./src/rules/matrixBlockSum/index.js)
- [62. Unique Paths](https://leetcode.com/problems/unique-paths/) => [uniquePaths](./src/rules/uniquePaths/index.js)
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) => [uniquePathsII](./src/rules/uniquePathsII/index.js)
- [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) => [minPathSum](./src/rules/minPathSum/index.js)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/) => [maximalSquare](./src/rules/maximalSquare/index.js)
- [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) => [longestPalindromicSubstring](./src/rules/longestPalindromicSubstring/index.js)
- [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) => [longestPalindromeSubseq](./src/rules/longestPalindromeSubseq/index.js)
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) => [lengthOfLIS](./src/rules/lengthOfLIS/index.js)
- [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) => [isSubsequence](./src/rules/isSubsequence/index.js)
- [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) => [longestCommonSubsequence](./src/rules/longestCommonSubsequence/index.js)
- [72. Edit Distance](https://leetcode.com/problems/edit-distance/) => [longestCommonSubsequence](./src/rules/longestCommonSubsequence/index.js)
- [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) [deleteOperationforTwoStrings](./src/rules/deleteOperationforTwoStrings/index.js)
- # [1092. Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/) => [shortestCommonSupersequence](./src/rules/shortestCommonSupersequence/index.js)

### string

- [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) [combinationSum4](./src/rules/combinationSum4/index.js)
- [712. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) [minimumDeleteSum](./src/rules/minimumDeleteSum/index.js)
