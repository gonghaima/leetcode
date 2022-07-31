import scoreOfParentheses from '../../src/rules/scoreOfParentheses';
import { inputData, expected } from '../data/scoreOfParenthesesData';

test('scoreOfParentheses should return expected result for case1', () => {
  const result = scoreOfParentheses(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('scoreOfParentheses should return expected result for case2', () => {
  const result = scoreOfParentheses(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('scoreOfParentheses should return expected result for case3', () => {
  const result = scoreOfParentheses(inputData.case3);
  expect(result).toEqual(expected.case3);
});
