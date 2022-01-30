import isSubsequence from '../../src/rules/isSubsequence';
import { inputData, expected } from '../data/isSubsequenceData';

test('isSubsequence should return the distance for case1', () => {
  const { s, t } = inputData.case1;
  const result = isSubsequence(s, t);
  expect(result).toEqual(expected.case1);
});

test('isSubsequence should return the distance for case2', () => {
  const { s, t } = inputData.case2;
  const result = isSubsequence(s, t);
  expect(result).toEqual(expected.case2);
});
