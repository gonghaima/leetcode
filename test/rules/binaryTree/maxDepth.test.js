import { maxDepth } from '../../../src/rules/binaryTree/maxDepth';
import { inputData, expected } from '../../mock/binaryTree/maxDepthData';

test('maxDepth should return expected value', () => {
  const actual = maxDepth(inputData.case1);
  expect(actual).toBe(expected.case1);
});

test('maxDepth should return expected value', () => {
  const actual = maxDepth(inputData.case2);
  expect(actual).toBe(expected.case2);
});
