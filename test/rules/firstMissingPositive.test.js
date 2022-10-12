import firstMissingPositive from '../../src/rules/firstMissingPositive';
import { inputData, expected } from '../data/firstMissingPositiveData';

test('firstMissingPositive should return expected result for case1', () => {
  const result = firstMissingPositive(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('firstMissingPositive should return expected result for case2', () => {
  const result = firstMissingPositive(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('firstMissingPositive should return expected result for case3', () => {
  const result = firstMissingPositive(inputData.case3);
  expect(result.sort()).toEqual(expected.case3.sort());
});
