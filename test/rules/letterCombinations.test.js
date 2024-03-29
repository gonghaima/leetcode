import letterCombinations from '../../src/rules/letterCombinations';
import { inputData, expected } from '../data/letterCombinationsData';

test('letterCombinations function should return correct sum result from cases data 1', () => {
  expect(letterCombinations(inputData.case1)).toEqual(
    expected.case1.sort()
  );
});

test('letterCombinations function should return correct sum result from cases data 2', () => {
  expect(letterCombinations(inputData.case2)).toEqual(
    expected.case2.sort()
  );
});

test('letterCombinations function should return correct sum result from cases data 3', () => {
  expect(letterCombinations(inputData.case3)).toEqual(
    expected.case3.sort()
  );
});
