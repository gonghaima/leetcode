import validateStackSequences from '../../src/rules/validateStackSequences';
import { inputData, expected } from '../data/validateStackSequencesData';

test('validateStackSequences should return true, if can be resolved to popped', () => {
  expect(
    validateStackSequences(inputData.case1.pushed, inputData.case1.popped)
  ).toBe(expected.case1);
});

test('validateStackSequences should return false, if can not be resolved to popped', () => {
  expect(validateStackSequences(inputData.case2.pushed)).toBe(expected.case2);
});

test('validateStackSequences should return correct result, where a value is zero', () => {
  expect(
    validateStackSequences(inputData.case3.pushed, inputData.case3.popped)
  ).toBe(expected.case3);
});

test('validateStackSequences should return correct case4 result', () => {
  expect(
    validateStackSequences(inputData.case4.pushed, inputData.case4.popped)
  ).toBe(expected.case4);
});
