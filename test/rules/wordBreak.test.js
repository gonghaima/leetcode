import wordBreak from '../../src/rules/wordBreak';
import { inputData, expected } from '../data/wordBreakData';

test('wordBreak should return expected result for case1', () => {
  const { s, wordDict } = inputData.case1;
  const result = wordBreak(s, wordDict);
  expect(result).toEqual(expected.case1);
});

test('wordBreak should return expected result for case2', () => {
  const { s, wordDict } = inputData.case2;
  const result = wordBreak(s, wordDict);
  expect(result).toEqual(expected.case2);
});

test('wordBreak should return expected result for case3', () => {
  const { s, wordDict } = inputData.case3;
  const result = wordBreak(s, wordDict);
  expect(result).toEqual(expected.case3);
});
