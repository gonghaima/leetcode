import shortestCommonSupersequence from '../../src/rules/shortestCommonSupersequence';
import { inputData, expected } from '../data/shortestCommonSupersequenceData';

test('shortestCommonSupersequence should return expected result for case1', () => {
  const { str1, str2 } = inputData.case1;
  const result = shortestCommonSupersequence(str1, str2);
  expect(result).toEqual(expected.case1);
});
test('shortestCommonSupersequence should return expected result for case2', () => {
  const { str1, str2 } = inputData.case2;
  const result = shortestCommonSupersequence(str1, str2);
  expect(result).toEqual(expected.case2);
});
