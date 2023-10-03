import divideTwoInt from '../../src/rules/divideTwoInt';

import { inputData, expected } from '../data/divideTwoIntData';

test('divideTwoInt should return expected result for case1', () => {
  const { dividend, divisor } = inputData.case1;
  const result = divideTwoInt(dividend, divisor);
  expect(result).toEqual(expected.case1);
});

test('divideTwoInt should return expected result for case2', () => {
  const { dividend, divisor } = inputData.case1;
  const result = divideTwoInt(dividend, divisor);
  expect(result).toEqual(expected.case2);
});
