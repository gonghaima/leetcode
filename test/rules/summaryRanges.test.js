import summaryRanges from '../../src/rules/summaryRanges';

import { inputData, expected } from '../data/summaryRangesData';

test('summaryRanges should satisfy all the given equations for case1', () => {
  const result = summaryRanges(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('summaryRanges should satisfy all the given equations for case2', () => {
  const result = summaryRanges(inputData.case2);
  expect(result).toEqual(expected.case2);
});
