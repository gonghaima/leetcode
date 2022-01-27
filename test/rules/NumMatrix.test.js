import NumMatrix from '../../src/rules/NumMatrix';
import { expected } from '../data/NumMatrixData';

let numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

test('NumMatrix should return expected result for case1', () => {
  const result = numMatrix.sumRegion(2, 1, 4, 3);
  expect(result).toEqual(expected.case1[1]);
});

test('NumMatrix should return expected result for case2', () => {
  const result = numMatrix.sumRegion(1, 1, 2, 2);
  expect(result).toEqual(expected.case1[2]);
});

test('NumMatrix should return expected result for case2', () => {
  const result = numMatrix.sumRegion(1, 2, 2, 4);
  expect(result).toEqual(expected.case1[3]);
});
