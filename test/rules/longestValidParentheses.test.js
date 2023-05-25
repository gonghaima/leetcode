import longestValidParentheses from '../../src/rules/longestValidParentheses';
import { inputData, expected } from '../data/longestValidParenthesesData';

// test('longestValidParentheses should return expected result for case1', () => {
//   const result = longestValidParentheses(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });
test('longestValidParentheses should return expected result for case2', () => {
  const result = longestValidParentheses(inputData.case2);
  expect(result).toEqual(expected.case2);
});

// test('longestValidParentheses should return expected result for case3', () => {
//   const result = longestValidParentheses(inputData.case3);
//   expect(result).toEqual(expected.case3);
// });
