import stoneGameIII from '../../src/rules/stoneGameIII';
import { inputData, expected } from '../data/stoneGameIIIData';

test('stoneGameIII should return expected result for case1', () => {
  const result = stoneGameIII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('stoneGameIII should return expected result for case2', () => {
  const result = stoneGameIII(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('stoneGameIII should return expected result for case3', () => {
  const result = stoneGameIII(inputData.case3);
  expect(result).toEqual(expected.case3);
});

test('stoneGameIII should return expected result for case4', () => {
  const result = stoneGameIII(inputData.case4);
  expect(result).toEqual(expected.case4);
});

test('stoneGameIII should return expected result for case5', () => {
  const result = stoneGameIII(inputData.case5);
  expect(result).toEqual(expected.case5);
});
