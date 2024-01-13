import fullJustify from '../../src/rules/fullJustify';
import { inputData, expected } from '../data/fullJustifyData';

test('fullJustify should return true from a valid list for case 1', () => {
  const { words, maxWidth } = inputData.case1;
  const result = fullJustify(words, maxWidth);
  expect(result).toEqual(expected.case1);
});

test('fullJustify should return true from a valid list for case 2', () => {
  const { words, maxWidth } = inputData.case2;
  const result = fullJustify(words, maxWidth);
  expect(result).toEqual(expected.case2);
});

test('fullJustify should return true from a valid list for case 3', () => {
  const { words, maxWidth } = inputData.case3;
  const result = fullJustify(words, maxWidth);
  expect(result).toEqual(expected.case3);
});