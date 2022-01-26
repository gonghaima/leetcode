import matrixBlockSum from '../../src/rules/matrixBlockSum';
import { inputData, expected } from '../data/matrixBlockSumData';

test('matrixBlockSum should return max profit from case1', () => {
  const { mat, k } = inputData.case1;
  const result = matrixBlockSum(mat, k);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('matrixBlockSum should return max profit from case2', () => {
  const { mat, k } = inputData.case2;
  const result = matrixBlockSum(mat, k);
  expect(result.sort()).toEqual(expected.case2.sort());
});
