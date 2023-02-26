import wordBreakII from '../../src/rules/wordBreakII';
import { inputData, expected } from '../data/wordBreakIIData';

test('wordBreakII should return expected result for case1', () => {
  const { s, wordDict } = inputData.case1;
  const result = wordBreakII(s, wordDict);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('wordBreakII should return expected result for case2', () => {
  const { s, wordDict } = inputData.case2;
  const result = wordBreakII(s, wordDict);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('wordBreakII should return expected result for case3', () => {
  const { s, wordDict } = inputData.case3;
  const result = wordBreakII(s, wordDict);
  expect(result.sort()).toEqual(expected.case3.sort());
});
