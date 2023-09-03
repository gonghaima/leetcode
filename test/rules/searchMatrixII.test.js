import searchMatrixII from '../../src/rules/searchMatrixII';
import { inputData, expected } from '../data/searchMatrixIIData';

test('searchMatrixII should return expected result for case1', () => {
  const { matrix, target } = inputData.case1;
  const result = searchMatrixII(matrix, target);
  expect(result).toEqual(expected.case1);
});

test('searchMatrixII should return expected result for case2', () => {
  const { matrix, target } = inputData.case2;
  const result = searchMatrixII(matrix, target);
  expect(result).toEqual(expected.case2);
});
