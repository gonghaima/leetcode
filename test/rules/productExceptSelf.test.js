import productExceptSelf from '../../src/rules/productExceptSelf';
import { inputData, expected } from '../data/productExceptSelfData';

test('productExceptSelf should return the expected value for case1', () => {
  const result = productExceptSelf(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('productExceptSelf should return the expected value for case2', () => {
  const result = productExceptSelf(inputData.case2);
  expect(result.map((c) => Math.abs(c))).toEqual(expected.case2);
});
