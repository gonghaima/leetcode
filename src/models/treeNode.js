export default class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null; // eslint-disable-line
  }
}

class Node {
  constructor(value) {
    this.val = value;
  }
}

export function createTree(data) {
  const targets = [[]];
  let head;

  data.forEach((value, i) => {
    const node = new Node(value),
      [target, side] = targets[i];

    targets.push([node, 'left'], [node, 'right']);

    if (!target) head = node;
    else if (value !== null) target[side] = node;
  });

  return head;
}

export function equalTree(tree1, tree2) {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;

  return (
    tree1.val === tree2.val &&
    equalTree(tree1.left, tree2.left) &&
    equalTree(tree1.right, tree2.right)
  );
}
