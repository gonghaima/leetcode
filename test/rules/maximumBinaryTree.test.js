// import constructMaximumBinaryTree from '../../src/rules/maximumBinaryTree';
import constructMaximumBinaryTree from '../../src/rules/binaryTree/maximumBinaryTree';
import { arrCase1, arrCase2 } from '../mock/maximumBinaryTreeData';

test('maximumBinaryTree should return the sorted tree', () => {
  const result = constructMaximumBinaryTree(arrCase1);
  expect(result.left.val).toBe(3);
  expect(result.right.val).toBe(5);
  expect(result.right.left.val).toBe(0);
});

test('maximumBinaryTree should work on short array', () => {
  const result = constructMaximumBinaryTree(arrCase2);
  expect(result.left).toBe(null);
});
