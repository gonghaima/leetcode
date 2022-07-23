import shiftingLetters from '../../src/rules/shiftingLetters';
import { inputData, expected } from '../data/shiftingLettersData';

test('shiftingLetters should return expected result for case1', () => {
  const { s, shifts } = inputData.case1;
  const result = shiftingLetters(s, shifts);
  expect(result).toEqual(expected.case1);
});
test('shiftingLetters should return expected result for case2', () => {
  const { s, shifts } = inputData.case2;
  const result = shiftingLetters(s, shifts);
  expect(result).toEqual(expected.case2);
});
