import checkInclusion from '../../src/rules/checkInclusion';
import { inputData, expected } from '../data/checkInclusionData';

test('checkInclusion should return correct result for case1', () => {
  const { s1, s2 } = inputData.case1;
  const result = checkInclusion(s1, s2);
  expect(result).toEqual(expected.case1);
});

test('checkInclusion should return correct result for case2', () => {
  const { s1, s2 } = inputData.case2;
  const result = checkInclusion(s1, s2);
  expect(result).toEqual(expected.case2);
});
