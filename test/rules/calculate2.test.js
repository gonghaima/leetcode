import calculate2 from '../../src/rules/calculate2';

import { inputData, expected } from '../data/calculate2Data';

test('calculate2 should return expected result for case1', () => {
  const result = calculate2(
    inputData.case1.numCourses,
    inputData.case1.prerequisites
  );
  expect(result).toEqual(expected.case1);
});

test('calculate2 should return expected result for case2', () => {
  const result = calculate2(
    inputData.case2.numCourses,
    inputData.case2.prerequisites
  );
  expect(result).toEqual(expected.case2);
});

test('calculate2 should return expected result for case3', () => {
  const result = calculate2(
    inputData.case3.numCourses,
    inputData.case3.prerequisites
  );
  expect(result).toEqual(expected.case3);
});