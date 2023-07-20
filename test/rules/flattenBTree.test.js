import flattenBTree from '../../src/rules/flattenBTree';
import { inputData, expected } from '../data/flattenBTreeData';

test('flattenBTree should return expected result for case1', () => {
  const result = flattenBTree(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('flattenBTree should return expected result for case2', () => {
  const result = flattenBTree(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('flattenBTree should return expected result for case3', () => {
  const result = flattenBTree(inputData.case3);
  expect(result).toEqual(expected.case3);
});
