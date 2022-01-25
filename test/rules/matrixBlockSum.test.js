import matrixBlockSum from '../../src/rules/matrixBlockSum';
import { inputData, expected } from '../data/matrixBlockSumData';

test('matrixBlockSum should return max profit from case1', () => {
  const { mat, k } = inputData.case1;
  const result = matrixBlockSum(mat, k);
  expect(result).toBe(expected.case1);
});

test('matrixBlockSum should return max profit from case2', () => {
  const { mat, k } = inputData.case2;
  const result = matrixBlockSum(mat, k);
  expect(result).toBe(expected.case2);
});
