import maximalSquare from '../../src/rules/maximalSquare';
import { inputData, expected } from '../data/maximalSquareData';
test('maximalSquare should return expected result from case1', () => {
  expect(maximalSquare(inputData.case1)).toBe(expected.case1);
});

test('maximalSquare should return expected result from case2', () => {
  expect(maximalSquare(inputData.case2)).toBe(expected.case2);
});

test('maximalSquare should return expected result from case3', () => {
  expect(maximalSquare(inputData.case3)).toBe(expected.case3);
});
