import uglyNumberII from '../../src/rules/uglyNumberII';
import { inputData, expected } from '../data/uglyNumberIIData';

test('uglyNumberII should return expected result - case 1', () => {
  const result = uglyNumberII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('uglyNumberII should return expected result - case 2', () => {
  const result = uglyNumberII(inputData.case2);
  expect(result).toEqual(expected.case2);
});
