import rightSideView from '../../src/rules/rightSideView';
import { inputData, expected } from '../data/rightSideViewData';

test('rightSideView should return correct result for case1', () => {
  const result = rightSideView(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('rightSideView should return correct result for case2', () => {
  const result = rightSideView(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('rightSideView should return correct result for case3', () => {
  const result = rightSideView(inputData.case3);
  expect(result).toEqual(expected.case3);
});
