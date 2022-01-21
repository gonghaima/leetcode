import maxScoreSightseeingPair from '../../src/rules/maxScoreSightseeingPair';

import { inputData, expected } from '../data/maxScoreSightseeingPairData';

test('maxScoreSightseeingPair should return expected result for case1', () => {
  const result = maxScoreSightseeingPair(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('maxScoreSightseeingPair should return expected result for case2', () => {
  const result = maxScoreSightseeingPair(inputData.case2);
  expect(result).toEqual(expected.case2);
});
