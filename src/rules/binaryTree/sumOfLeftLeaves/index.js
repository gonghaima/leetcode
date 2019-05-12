export const sumOfLeftLeaves = (x, isLeft) => {
  if (!x) return 0;
  if (!x.left && !x.right && isLeft) return x.val;

  return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false);
};
