import twoSumII from '../../src/rules/twoSumII';
import { inputData, expected } from '../data/twoSumIIData';

test('twoSumII should return expected result for case1', () => {
  const { numbers, target } = inputData.case1;
  const result = twoSumII(numbers, target);
  expect(result).toEqual(expected.case1);
});
test('twoSumII should return expected result for case2', () => {
  const { numbers, target } = inputData.case2;
  const result = twoSumII(numbers, target);
  expect(result).toEqual(expected.case2);
});
test('twoSumII should return expected result for case3', () => {
  const { numbers, target } = inputData.case3;
  const result = twoSumII(numbers, target);
  expect(result).toEqual(expected.case3);
});
