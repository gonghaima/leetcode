import binarySearch from '../../src/rules/binarySearch';
import { inputData, expected } from '../data/binarySearchData';

test('binarySearch should return expected result for case1', () => {
  const { nums, target } = inputData.case1;
  const result = binarySearch(nums, target);
  expect(result).toEqual(expected.case1);
});
test('binarySearch should return expected result for case2', () => {
  const { nums, target } = inputData.case2;
  const result = binarySearch(nums, target);
  expect(result).toEqual(expected.case2);
});
