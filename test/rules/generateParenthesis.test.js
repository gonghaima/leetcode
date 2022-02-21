import generateParenthesis from '../../src/rules/generateParenthesis';
import { inputData, expected } from '../data/generateParenthesisData';

test('generateParenthesis should return correct result for case1', () => {
  const result = generateParenthesis(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test('generateParenthesis should return correct result for case2', () => {
  const result = generateParenthesis(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
