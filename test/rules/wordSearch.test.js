import wordSearch from '../../src/rules/wordSearch';
import { inputData, expected } from '../data/wordSearchData';

test('wordSearch should return expected result for case1', () => {
  const { board, words } = inputData.case1;
  const result = wordSearch(board, words);
  expect(result).toEqual(expected.case1);
});

test('wordSearch should return expected result for case2', () => {
  const { board, words } = inputData.case2;
  const result = wordSearch(board, words);
  expect(result).toEqual(expected.case2);
});

test('wordSearch should return expected result for case3', () => {
  const { board, words } = inputData.case3;
  const result = wordSearch(board, words);
  expect(result).toEqual(expected.case3);
});
