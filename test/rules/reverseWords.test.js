import reverseWords from '../../src/rules/reverseWords';
import { inputData, expected } from '../data/reverseWordsData';

test('reverseWords should return correct result for case1', () => {
  const result = reverseWords(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('reverseWords should return correct result for case2', () => {
  const result = reverseWords(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('reverseWords should return correct result for case3', () => {
  const result = reverseWords(inputData.case3);
  expect(result).toEqual(expected.case3);
});
