import wordearch from '../../src/rules/wordSearch';
import { inputData, expected } from '../data/wordSearchData';

test('wordearch should return expected result for case1', () => {
  const { board, word } = inputData.case1;
  const result = wordearch(board, word);
  expect(result).toEqual(expected.case1);
});

test('wordearch should return expected result for case2', () => {
  const { board, word } = inputData.case2;
  const result = wordearch(board, word);
  expect(result).toEqual(expected.case2);
});

test('wordearch should return expected result for case3', () => {
  const { board, word } = inputData.case3;
  const result = wordearch(board, word);
  expect(result).toEqual(expected.case3);
});
