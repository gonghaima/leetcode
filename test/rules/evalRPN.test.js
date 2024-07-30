import evalRPN from '../../src/rules/evalRPN';

import { inputData, expected } from '../data/evalRPNData';

test('evalRPN should return expected result - case 1', () => {
  const result = evalRPN(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('evalRPN should return expected result - case 2', () => {
  const result = evalRPN(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('evalRPN should return expected result - case 3', () => {
  const result = evalRPN(inputData.case3);
  expect(result).toEqual(expected.case3);
});
