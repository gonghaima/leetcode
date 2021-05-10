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
