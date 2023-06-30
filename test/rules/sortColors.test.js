import sortColors from '../../src/rules/sortColors';
import { inputData, expected } from '../data/sortColorsData';

test('sortColors should return expected result for case1', () => {
  const result = sortColors(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('sortColors should return expected result for case2', () => {
  const result = sortColors(inputData.case2);
  expect(result).toEqual(expected.case2);
});
