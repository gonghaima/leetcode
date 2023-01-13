import removeInvalidParentheses from '../../src/rules/removeInvalidParentheses';
import { inputData, expected } from '../data/removeInvalidParenthesesData';

test('removeInvalidParentheses should return correct result for case1', () => {
  const result = removeInvalidParentheses(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('removeInvalidParentheses should return correct result for case2', () => {
  const result = removeInvalidParentheses(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('removeInvalidParentheses should return correct result for case3', () => {
  const result = removeInvalidParentheses(inputData.case3);
  expect(result).toEqual(expected.case3);
});
