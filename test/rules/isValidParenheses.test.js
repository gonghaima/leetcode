import isValidParenheses from '../../src/rules/isValidParenheses';
import { inputData, expected } from '../data/isValidParenhesesData';

test('isValidParenheses should return the distance for case1', () => {
  const result = isValidParenheses(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('isValidParenheses should return the distance for case2', () => {
  const result = isValidParenheses(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('isValidParenheses should return the distance for case3', () => {
  const result = isValidParenheses(inputData.case3);
  expect(result).toEqual(expected.case3);
});
