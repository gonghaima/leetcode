import removeInvalidParentheses from '../../src/rules/removeInvalidParentheses';
import { inputData, expected } from '../data/removeInvalidParenthesesData';

test('removeInvalidParentheses should return correct result for case1', () => {
  const result = removeInvalidParentheses(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('removeInvalidParentheses should return correct result for case2', () => {
  const result = removeInvalidParentheses(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test('removeInvalidParentheses should return correct result for case3', () => {
  const result = removeInvalidParentheses(inputData.case3);
  expect(result.sort()).toEqual(expected.case3.sort());
});
