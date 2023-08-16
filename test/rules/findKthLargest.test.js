import findKthLargest from '../../src/rules/findKthLargest';

import { inputData, expected } from '../data/findKthLargestData';

test('findKthLargest should return expected result for case1', () => {
  const { nums, k } = inputData.case1;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(expected.case1);
});

test('findKthLargest should return expected result for case2', () => {
  const { nums, k } = inputData.case2;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(expected.case2);
});
