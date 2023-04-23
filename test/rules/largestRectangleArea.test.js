import largestRectangleArea from '../../src/rules/largestRectangleArea';

import { inputData, expected } from '../data/largestRectangleAreaData';

test('largestRectangleArea should return expected result for case 1', () => {
  const result = largestRectangleArea(inputData.case1);
  expect(result).toBe(expected.case1);
});

test('largestRectangleArea should return expected result for case 2', () => {
  const result = largestRectangleArea(inputData.case2);
  expect(result).toBe(expected.case2);
});
