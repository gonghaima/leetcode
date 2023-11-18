import canCompleteCircuit from '../../src/rules/canCompleteCircuit';
import { inputData, expected } from '../data/canCompleteCircuitData';

test('canCompleteCircuit should return expected result for case1', () => {
  const { gas, cost } = inputData.case1;
  const result = canCompleteCircuit(gas, cost);
  expect(result).toEqual(expected.case1);
});

test('canCompleteCircuit should return expected result for case2', () => {
  const { gas, cost } = inputData.case2;
  const result = canCompleteCircuit(gas, cost);
  expect(result).toEqual(expected.case2);
});
