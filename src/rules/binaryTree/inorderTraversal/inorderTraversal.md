## Binary Tree Inorder Traversal

In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.

Typically, for binary search tree, we can retrieve all the data in sorted order using in-order traversal. We will mention that again in another card(Introduction to Data Structure - Binary Search Tree).

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
<pre>
   1
    \
     2
    /
   3
</pre>
Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?