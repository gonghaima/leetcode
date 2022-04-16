import longestWord from '../../src/rules/longestWord';
import { inputData, expected } from '../data/longestWordData';

test('longestWord should return expected result for case1', () => {
  const result = longestWord(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('longestWord should return expected result for case2', () => {
  const result = longestWord(inputData.case2);
  expect(result).toEqual(expected.case2);
});
