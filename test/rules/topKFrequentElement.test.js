import topKFrequentElement from '../../src/rules/topKFrequentElement';
import { inputData, expected } from '../data/topKFrequentElementData';

test('topKFrequentElement should return expected result for case1', () => {
  const { nums, k } = inputData.case1;
  const result = topKFrequentElement(nums, k);
  expect(result).toEqual(expected.case1);
});
test('topKFrequentElement should return expected result for case2', () => {
  const { nums, k } = inputData.case2;
  const result = topKFrequentElement(nums, k);
  expect(result).toEqual(expected.case2);
});
