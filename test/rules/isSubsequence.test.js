import isSubsequence from '../../src/rules/isSubsequence';
import { inputData, expected } from '../data/isSubsequenceData';

test('isSubsequence should return the distance for case1', () => {
  const result = isSubsequence(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('isSubsequence should return the distance for case2', () => {
  const result = isSubsequence(inputData.case2);
  expect(result).toEqual(expected.case2);
});
