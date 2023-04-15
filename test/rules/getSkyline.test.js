import getSkyline from '../../src/rules/getSkyline';
import { inputData, expected } from '../data/getSkylineData';

test('getSkyline should return correct result for case1', () => {
  const result = getSkyline(inputData.case1);
  expect(JSON.stringify(result.sort())).toEqual(
    JSON.stringify(expected.case1.sort())
  );
});

test('getSkyline should return correct result for case2', () => {
  const result = getSkyline(inputData.case2);
  expect(JSON.stringify(result.sort())).toEqual(
    JSON.stringify(expected.case2.sort())
  );
});
