import largestNumber179 from '../../src/rules/largestNumber179';
import { inputData, expected } from '../data/largestNumber179Data';

test('largestNumber179 should return expected result for case1', () => {
  const { cost, target } = inputData.case1;
  const result = largestNumber179(cost, target);
  expect(result).toEqual(expected.case1);
});
test('largestNumber179 should return expected result for case2', () => {
  const { cost, target } = inputData.case2;
  const result = largestNumber179(cost, target);
  expect(result).toEqual(expected.case2);
});
