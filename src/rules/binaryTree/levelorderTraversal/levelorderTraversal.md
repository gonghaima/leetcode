## Level-order Traversal

Level-order traversal is to traverse the tree level by level.

Breadth-First Search is an algorithm to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visit the node itself first. Then traverse its neighbors, traverse its second level neighbors, traverse its third level neighbors, so on and so forth.

When we do breadth-first search in a tree, the order of the nodes we visited is in level order.

Here is an example of level-order traversal:

Typically, we use a queue to help us to do BFS. If you are not so familiar with the queue, you can find more information about that in another card coming soon.

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>
return its level order traversal as:
<pre>
[
  [3],
  [9,20],
  [15,7]
]
</pre>