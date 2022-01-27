import uniquePaths from '../../src/rules/uniquePaths';

import { inputData, expected } from '../data/uniquePathsData';

test('uniquePaths should return expected result - case 1', () => {
  const { m, n } = inputData.case1;
  const result = uniquePaths(m, n);
  expect(result).toEqual(expected.case1);
});

test('uniquePaths should return expected result - case 2', () => {
  const { m, n } = inputData.case2;
  const result = uniquePaths(m, n);
  expect(result).toEqual(expected.case2);
});
