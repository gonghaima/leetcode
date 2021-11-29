import numberOfArrays from '../../src/rules/numberOfArrays';

import { inputData, expected } from '../data/numberOfArraysData';

test('numberOfArrays should return expected result for case 1', () => {
  const { s, k } = inputData.case1;
  const result = numberOfArrays(s, k);
  expect(result).toEqual(expected.case1);
});

test('numberOfArrays should return expected result for case 2', () => {
  const { s, k } = inputData.case2;
  const result = numberOfArrays(s, k);
  expect(result).toEqual(expected.case2);
});

test('numberOfArrays should return expected result for case 3', () => {
  const { s, k } = inputData.case3;
  const result = numberOfArrays(s, k);
  expect(result).toEqual(expected.case3);
});

test('numberOfArrays should return expected result for case 4', () => {
  const { s, k } = inputData.case4;
  const result = numberOfArrays(s, k);
  expect(result).toEqual(expected.case4);
});

test('numberOfArrays should return expected result for case 5', () => {
  const { s, k } = inputData.case5;
  const result = numberOfArrays(s, k);
  expect(result).toEqual(expected.case5);
});
