import intToRoman from '../../src/rules/intToRoman';
import { inputData, expected } from '../data/intToRomanData';

test('intToRoman should return correct result for case1', () => {
  const result = intToRoman(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('intToRoman should return correct result for case2', () => {
  const result = intToRoman(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('intToRoman should return correct result for case3', () => {
  const result = intToRoman(inputData.case3);
  expect(result).toEqual(expected.case2);
});
