import minimumTotal from '../../src/rules/minimumTotal';

import { inputData, expected } from '../data/minimumTotalData';

test('minimumTotal should return expected result for case1', () => {
  const result = minimumTotal(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('minimumTotal should return expected result for case2', () => {
  const result = minimumTotal(inputData.case2);
  expect(result).toEqual(expected.case2);
});
