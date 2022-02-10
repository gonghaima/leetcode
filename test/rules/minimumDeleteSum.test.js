import minimumDeleteSum from '../../src/rules/minimumDeleteSum';

import { inputData, expected } from '../data/minimumDeleteSumData';

test('minimumDeleteSum should return expected result for case1', () => {
  const { s1, s2 } = inputData.case1;
  const result = minimumDeleteSum(s1, s2);
  expect(result).toEqual(expected.case1);
});

test('minimumDeleteSum should return expected result for case2', () => {
  const { s1, s2 } = inputData.case2;
  const result = minimumDeleteSum(s1, s2);
  expect(result).toEqual(expected.case2);
});