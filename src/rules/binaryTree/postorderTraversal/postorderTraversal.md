## Post-order Traversal

Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.

Here is an animation to help you understand post-order traversal:

It is worth noting that when you delete nodes in a tree, deletion process will be in post-order. That is to say, when you delete a node, you will delete its left child and its right child before you delete the node itself.

Also, post-order is widely use in mathematical expression. It is easier to write a program to parse a post-order expression. Here is an example:



You can easily figure out the original expression using the inorder traversal. However, it is not easy for a program to handle this expression since you have to check the priorities of operations.

If you handle this tree in postorder, you can easily handle the expression using a stack. Each time when you meet a operator, you can just pop 2 elements from the stack, calculate the result and push the result back into the stack.

Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
<pre>
   1
    \
     2
    /
   3
</pre>
Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?