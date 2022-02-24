import multiplyStrings from '../../src/rules/multiplyStrings';
import { inputData, expected } from '../data/multiplyStringsData';

test('multiplyStrings should return expected result for case1', () => {
  const { num1, num2 } = inputData.case1;
  const result = multiplyStrings(num1, num2);
  expect(result).toEqual(expected.case1);
});

test('multiplyStrings should return expected result for case2', () => {
  const { num1, num2 } = inputData.case2;
  const result = multiplyStrings(num1, num2);
  expect(result).toEqual(expected.case2);
});
