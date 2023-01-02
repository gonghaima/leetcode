import longestIncreasingPath from '../../src/rules/longestIncreasingPath';

import { inputData, expected } from '../data/longestIncreasingPathData';

test('longestIncreasingPath should return expected result for case1', () => {
  const result = longestIncreasingPath(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('longestIncreasingPath should return expected result for case2', () => {
  const result = longestIncreasingPath(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('longestIncreasingPath should return expected result for case3', () => {
  const result = longestIncreasingPath(inputData.case3);
  expect(result).toEqual(expected.case3);
});
