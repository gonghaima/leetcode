import wordSubsets from '../../src/rules/wordSubsets';
import { inputData, expected } from '../data/wordSubsetsData';

test('wordSubsets should return expected result for case1', () => {
  const { words1, words2 } = inputData.case1;
  const result = wordSubsets(words1, words2);
  expect(result).toEqual(expected.case1);
});

test('wordSubsets should return expected result for case2', () => {
  const { words1, words2 } = inputData.case2;
  const result = wordSubsets(words1, words2);
  expect(result).toEqual(expected.case2);
});
