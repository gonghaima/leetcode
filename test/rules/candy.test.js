import candy from '../../src/rules/candy';
import { inputData, expected } from '../data/candyData';

test('candy should return expected result for case1', () => {
  const result = candy(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('candy should return expected result for case2', () => {
  const result = candy(inputData.case2);
  expect(result).toEqual(expected.case2);
});
