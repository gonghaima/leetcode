import stoneGameVI from '../../src/rules/stoneGameVI/greedy';
import { inputData, expected } from '../data/stoneGameVIData';

test('stoneGameVI should return expected result for case1', () => {
  const { aliceValues, bobValues } = inputData.case1;
  const result = stoneGameVI(aliceValues, bobValues);
  expect(result).toEqual(expected.case1);
});

test('stoneGameVI should return expected result for case2', () => {
  const { aliceValues, bobValues } = inputData.case2;
  const result = stoneGameVI(aliceValues, bobValues);
  expect(result).toEqual(expected.case2);
});

test('stoneGameVI should return expected result for case3', () => {
  const { aliceValues, bobValues } = inputData.case3;
  const result = stoneGameVI(aliceValues, bobValues);
  expect(result).toEqual(expected.case3);
});

test('stoneGameVI should return expected result for case4', () => {
  const { aliceValues, bobValues } = inputData.case4;
  const result = stoneGameVI(aliceValues, bobValues);
  expect(result).toEqual(expected.case4);
});
