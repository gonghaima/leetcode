import searchMatrix from '../../src/rules/searchMatrix';
import { inputData, expected } from '../data/searchMatrixData';

test('searchMatrix should return expected result for case1', () => {
  const { matrix, target } = inputData.case1;
  const result = searchMatrix(matrix, target);
  expect(result).toEqual(expected.case1);
});

test('searchMatrix should return expected result for case2', () => {
  const { matrix, target } = inputData.case2;
  const result = searchMatrix(matrix, target);
  expect(result).toEqual(expected.case2);
});
