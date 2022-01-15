import robII from '../../src/rules/robII';
import { inputData, expected } from '../data/robIIData';

test('robII should return correct result for case1', () => {
  const result = robII(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('robII should return correct result for case2', () => {
  const result = robII(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('robII should return correct result for case3', () => {
  const result = robII(inputData.case3);
  expect(result).toEqual(expected.case3);
});
