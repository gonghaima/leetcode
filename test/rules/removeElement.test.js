import removeElement from '../../src/rules/removeElement';
import { inputData, expected } from '../data/removeElementData';

test('removeElement should return expected result 1', () => {
  const { nums, val } = inputData.case1;
  expect(removeElement(nums, val)).toBe(expected.case1);
});

test('removeElement should return expected result 2', () => {
  const { nums, val } = inputData.case2;
  expect(removeElement(nums, val)).toBe(expected.case2);
});
