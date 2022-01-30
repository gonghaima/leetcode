import longestPalindromeSubseq from '../../src/rules/longestPalindromeSubseq';
import { inputData, expected } from '../data/longestPalindromeSubseqData';

test('longestPalindromeSubseq should return expected result for case1', () => {
  const result = longestPalindromeSubseq(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('longestPalindromeSubseq should return expected result for case2', () => {
  const result = longestPalindromeSubseq(inputData.case2);
  expect(result).toEqual(expected.case2);
});
