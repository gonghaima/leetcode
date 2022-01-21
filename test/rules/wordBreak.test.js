import wordBreak from '../../src/rules/wordBreak';
import { inputData, expected } from '../data/wordBreakData';

test('wordBreak should return expected result for case1', () => {
  const result = wordBreak(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('wordBreak should return expected result for case2', () => {
  const result = wordBreak(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('wordBreak should return expected result for case3', () => {
  const result = wordBreak(inputData.case3);
  expect(result).toEqual(expected.case3);
});
