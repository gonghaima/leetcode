import jump from '../../src/rules/jumpVI/topdown-memo';
import { inputData, expected } from '../data/jumpVIData';

test('jump should return the distance for case1', () => {
  const { nums, k } = inputData.case1;
  const result = jump(nums, k);
  expect(result).toEqual(expected.case1);
});

test('jump should return the distance for case2', () => {
  const { nums, k } = inputData.case2;
  const result = jump(nums, k);
  expect(result).toEqual(expected.case2);
});

test('jump should return the distance for case3', () => {
  const { nums, k } = inputData.case3;
  const result = jump(nums, k);
  expect(result).toEqual(expected.case3);
});
