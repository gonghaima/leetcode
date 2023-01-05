import countSmaller from '../../src/rules/countSmaller';
import { inputData, expected } from '../data/countSmallerData';

test('countSmaller should return correct result for case1', () => {
  const result = countSmaller(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('countSmaller should return correct result for case2', () => {
  const result = countSmaller(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('countSmaller should return correct result for case3', () => {
  const result = countSmaller(inputData.case3);
  expect(result).toEqual(expected.case3);
});
