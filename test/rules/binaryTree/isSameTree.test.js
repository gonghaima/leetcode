import isSameTree from '../../../src/rules/binaryTree/isSameTree';
import { inputData, expected } from '../../data/binaryTree/isSameTreeData';

test('isSameTree should return expected value from case1', () => {
  const { p, q } = inputData.case1;
  const actual = isSameTree(p, q);
  expect(actual).toBe(expected.case1);
});

test('isSameTree should return expected value for case2', () => {
  const { p, q } = inputData.case2;
  const actual = isSameTree(p, q);
  expect(actual).toBe(expected.case1);
});

test('isSameTree should return expected value for case3', () => {
  const { p, q } = inputData.case3;
  const actual = isSameTree(p, q);
  expect(actual).toBe(expected.case1);
});
