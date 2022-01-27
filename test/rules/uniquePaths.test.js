import uniquePaths from '../../src/rules/uniquePaths';

import { inputData, expected } from '../data/updateMatrixData';

test('uniquePaths should return expected result - case 1', () => {
  const { m, n } = inputData.case1;
  const result = uniquePaths(m, n);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('uniquePaths should return expected result - case 2', () => {
  const { m, n } = inputData.case2;
  const result = uniquePaths(m, n);
  expect(result.sort()).toEqual(expected.case2.sort());
});
