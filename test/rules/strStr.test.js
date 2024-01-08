import strStr from '../../src/rules/strStr';
import { inputData, expected } from '../data/strStrData';

test('strStr should return expected result for case1', () => {
  const { haystack, needle } = inputData.case1;
  const result = strStr(haystack, needle);
  expect(result).toEqual(expected.case1);
});

test('strStr should return expected result for case2', () => {
  const { haystack, needle } = inputData.case2;
  const result = strStr(haystack, needle);
  expect(result).toEqual(expected.case2);
});
