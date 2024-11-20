import isSameTree from '../../../src/rules/binaryTree/isSameTree';
import { inputData, expected } from '../../data/binaryTree/isSameTreeData';
import { equalTree } from '../../../src/models/treeNode';

test('isSameTree should return expected value from case1', () => {
  const { p, q } = inputData.case1;
  expect(equalTree(p, q)).toBe(true);
});

test('isSameTree should return expected value for case2', () => {
  const { p, q } = inputData.case2;
  expect(equalTree(p, q)).toBe(false);
});

test('isSameTree should return expected value for case3', () => {
  const { p, q } = inputData.case3;
  expect(equalTree(p, q)).toBe(false);
});
