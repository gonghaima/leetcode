import letterCasePermutation from '../../src/rules/letterCasePermutation';
import { inputData, expected } from '../data/letterCasePermutationData';

test('letterCasePermutation function should return correct sum result from cases data 1', () => {
  expect(letterCasePermutation(inputData.case1).sort()).toEqual(
    expected.case1.sort()
  );
});

test('letterCasePermutation function should return correct sum result from cases data 2', () => {
  expect(letterCasePermutation(inputData.case2).sort()).toEqual(
    expected.case2.sort()
  );
});
