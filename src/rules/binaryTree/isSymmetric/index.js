var isSymmetric = function (root) {
  const q = [root, root];
  while (q.length) {
    const [l, r] = [q.shift(), q.shift()];
    if (!l && !r) continue;
    if (!!l !== !!r || l.val !== r.val) return false;
    q.push(l.left, r.right, l.right, r.left);
  }
  return true;
};

export { isSymmetric };
