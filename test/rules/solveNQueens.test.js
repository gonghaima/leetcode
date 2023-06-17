import solveNQueens from '../../src/rules/solveNQueens';
import { inputData, expected } from '../data/solveNQueensData';

test('solveNQueens should return expected result for case1', () => {
  const result = solveNQueens(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('solveNQueens should return expected result for case2', () => {
  const result = solveNQueens(inputData.case2);
  expect(result).toEqual(expected.case2);
});
