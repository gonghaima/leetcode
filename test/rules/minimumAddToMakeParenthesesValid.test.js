import calc from '../../src/rules/minimumAddToMakeParenthesesValid';
import calcV1 from '../../src/rules/minimumAddToMakeParenthesesValid/minimumAddToMakeParenthesesValidV1';
import {
  inputData,
  expected
} from '../mock/minimumAddToMakeParenthesesValid.data';

test('minimumAddToMakeParenthesesValid should calculate and return minimum required parentheses', () => {
  expect(calc(inputData.case1)).toBe(expected.case1);
  expect(calc(inputData.case2)).toBe(expected.case2);
  expect(calc(inputData.case3)).toBe(expected.case3);
  expect(calc(inputData.case4)).toBe(expected.case4);
});

test('minimumAddToMakeParenthesesValid_v1 should calculate and return minimum required parentheses', () => {
  expect(calcV1(inputData.case1)).toBe(expected.case1);
  expect(calcV1(inputData.case2)).toBe(expected.case2);
  expect(calcV1(inputData.case3)).toBe(expected.case3);
  expect(calcV1(inputData.case4)).toBe(expected.case4);
});
