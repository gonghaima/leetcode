import longestConsecutive from '../../src/rules/longestConsecutive';
import { inputData, expected } from '../data/longestConsecutiveData';

test('longestConsecutive should return expected result for case1', () => {
  const result = longestConsecutive(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('longestConsecutive should return expected result for case2', () => {
  const result = longestConsecutive(inputData.case2);
  expect(result).toEqual(expected.case2);
});
