var isSymmetric = function (root) {
  // Special case...
  if (!root) return true;
  // Return the function recursively...
  return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
  // If both root nodes are null pointers, return true...
  // If exactly one of them is a null node, return false...
  // If root nodes haven't same value, return false...
  if (
    (!leftroot && rightroot) ||
    (leftroot && !rightroot) ||
    (leftroot && rightroot && leftroot.val !== rightroot.val)
  )
    return false;
  // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
  if (leftroot && rightroot)
    return (
      isSame(leftroot.left, rightroot.right) &&
      isSame(leftroot.right, rightroot.left)
    );
  return true;
};

export { isSymmetric };
