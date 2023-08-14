import findKthLargest from '../../src/rules/findKthLargest';

import { inputData, expected } from '../data/findKthLargestData';

test('findKthLargest should return expected result for case1', () => {
  const result = findKthLargest(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('findKthLargest should return expected result for case2', () => {
  const result = findKthLargest(inputData.case2);
  expect(result).toEqual(expected.case2);
});
