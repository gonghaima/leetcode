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

- [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) => [networkDelayTime](./src/rules/networkDelayTime/index.js)
