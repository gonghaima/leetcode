import threeSum from '../../src/rules/threeSum';
import { inputData, expected } from '../data/threeSumData';

test('threeSum should output expected result for case1', () => {
  expect(threeSum(inputData.case1).sort()).toEqual(expected.case1.sort());
});

test('threeSum should output expected result for case2', () => {
  expect(threeSum(inputData.case2).sort()).toEqual(expected.case2.sort());
});

test('threeSum should output expected result for case3', () => {
  expect(threeSum(inputData.case3).sort()).toEqual(expected.case3.sort());
});
