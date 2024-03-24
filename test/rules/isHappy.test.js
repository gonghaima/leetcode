import isHappy from '../../src/rules/isHappy';
import { inputData, expected } from '../data/isHappyData';

test('isHappy should return the distance for case1', () => {
  const result = isHappy(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('isHappy should return the distance for case2', () => {
  const result = isHappy(inputData.case2);
  expect(result).toEqual(expected.case2);
});
