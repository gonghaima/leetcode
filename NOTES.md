# Graph Problems

## Dijkstra's

 start from a node, as 0 distance, calculate the distance to other nodes with shortest path

## Bellman Ford

Similar as Dijkstra, less code / less performance, start at a node as 0 distance, calculate distances towards the starting node

## floyd

build a matrix, indicating shortest distance between two nodes

## Union Find

Identify if problems talks about finding groups or components.

## Topological Sort

Build an ajencency list and indegree tracker(a node depends on how many others). Push the 0 degree node into queue, then minus 1 for exisiting, carry on the same process until no more available to push.

After that, least dependency node will appear higher index, as sorted.
