import isValidSudoku from '../../src/rules/isValidSudoku';
import { inputData, expected } from '../data/isValidSudokuData';

test('isValidSudoku should return the distance for case1', () => {
  const result = isValidSudoku(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('isValidSudoku should return the distance for case2', () => {
  const result = isValidSudoku(inputData.case2);
  expect(result).toEqual(expected.case2);
});
