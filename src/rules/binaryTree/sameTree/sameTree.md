Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

<pre>
Input:
    1                           
   / \
  2   3    [1,2,3]

    1
   / \
  2   3    [1,2,3]

Output:true
</pre>

Example 2:

<pre>
    1
   / 
  2         [1,2] 

    1                           
     \
      2    [1,null,2]
  
</pre>

Example 3:

<pre>
[null]
[null]

expected to be true
</pre>

Example 4:

<pre>
    1
     \
      1      [1,null,1] 

    1                           
     \
      1       [1,null,] 
  
</pre>

Note:
Bonus points if you could solve it both recursively and iteratively.
