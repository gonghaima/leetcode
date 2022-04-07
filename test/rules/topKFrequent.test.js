import topKFrequent from '../../src/rules/topKFrequent';
import { inputData, expected } from '../data/topKFrequentData';

test('topKFrequent should return expected result for case1', () => {
  const { words, k } = inputData.case1;
  const result = topKFrequent(words, k);
  expect(result).toEqual(expected.case1);
});
test('topKFrequent should return expected result for case2', () => {
  const { words, k } = inputData.case2;
  const result = topKFrequent(words, k);
  expect(result).toEqual(expected.case2);
});
