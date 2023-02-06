import findMedianSortedArrays from '../../src/rules/findMedianSortedArrays';
import { inputData, expected } from '../data/findMedianSortedArraysData';

test('findMedianSortedArrays should return expected result for case1', () => {
  const result = findMedianSortedArrays(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('findMedianSortedArrays should return expected result for case2', () => {
  const result = findMedianSortedArrays(inputData.case2);
  expect(result).toEqual(expected.case2);
});
