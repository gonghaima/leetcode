import findSubstring from '../../src/rules/findSubstring';
import { inputData, expected } from '../data/findSubstringData';

test('findSubstring should return expected result for case1', () => {
  const { s, words } = inputData.case1;
  const result = findSubstring(s, words);
  expect(result).toEqual(expected.case1);
});

test('findSubstring should return expected result for case2', () => {
  const { s, words } = inputData.case2;
  const result = findSubstring(s, words);
  expect(result).toEqual(expected.case2);
});

test('findSubstring should return expected result for case3', () => {
  const { s, words } = inputData.case3;
  const result = findSubstring(s, words);
  expect(result).toEqual(expected.case3);
});
