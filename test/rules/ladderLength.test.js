import ladderLength from '../../src/rules/ladderLength';
import { inputData, expected } from '../data/ladderLengthData';

test('ladderLength should return expected result for case1', () => {
  const { beginWord, endWord, wordList} = inputData.case1;
  const result = ladderLength(beginWord, endWord, wordList);
  expect(result).toEqual(expected.case1);
});
test('ladderLength should return expected result for case2', () => {
  const { beginWord, endWord, wordList} = inputData.case2;
  const result = ladderLength(beginWord, endWord, wordList);
  expect(result).toEqual(expected.case2);
});
