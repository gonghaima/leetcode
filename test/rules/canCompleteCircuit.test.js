import canCompleteCircuit from '../../src/rules/canCompleteCircuit';
import { inputData, expected } from '../data/canCompleteCircuitData';

test('canCompleteCircuit should return expected result for case1', () => {
  const result = canCompleteCircuit(
    inputData.case1.numCourses,
    inputData.case1.prerequisites
  );
  expect(result).toEqual(expected.case1);
});

test('canCompleteCircuit should return expected result for case2', () => {
  const result = canCompleteCircuit(
    inputData.case2.numCourses,
    inputData.case2.prerequisites
  );
  expect(result).toEqual(expected.case2);
});
