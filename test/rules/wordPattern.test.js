import wordPattern from '../../src/rules/wordPattern';
import { inputData, expected } from '../data/wordPatternData';

test('wordPattern should return expected result for case1', () => {
  const { pattern, s } = inputData.case1;
  const result = wordPattern(pattern, s);
  expect(result).toEqual(expected.case1);
});

test('wordPattern should return expected result for case2', () => {
  const { pattern, s } = inputData.case2;
  const result = wordPattern(pattern, s);
  expect(result).toEqual(expected.case2);
});

test('wordPattern should return expected result for case3', () => {
  const { pattern, s } = inputData.case3;
  const result = wordPattern(pattern, s);
  expect(result).toEqual(expected.case3);
});
