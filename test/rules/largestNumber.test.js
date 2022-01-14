import largestNumber from '../../src/rules/largestNumber';
import { inputData, expected } from '../data/largestNumberData';

test('largestNumber should return expected result for case1', () => {
  const { cost, target } = inputData.case1;
  const result = largestNumber(cost, target);
  expect(result).toEqual(expected.case1);
});
test('largestNumber should return expected result for case2', () => {
  const { cost, target } = inputData.case2;
  const result = largestNumber(cost, target);
  expect(result).toEqual(expected.case2);
});

test('largestNumber should return expected result for case3', () => {
  const { cost, target } = inputData.case3;
  const result = largestNumber(cost, target);
  expect(result).toEqual(expected.case3);
});
