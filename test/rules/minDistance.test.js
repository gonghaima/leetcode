import minDistance from '../../src/rules/minDistance';

import { inputData, expected } from '../data/minDistanceData';

test('minDistance should return expected result for case1', () => {
  const { word1, word2 } = inputData.case1;
  const result = minDistance(word1, word2);
  expect(result).toEqual(expected.case1);
});

test('minDistance should return expected result for case2', () => {
  const { word1, word2 } = inputData.case2;
  const result = minDistance(word1, word2);
  expect(result).toEqual(expected.case2);
});
