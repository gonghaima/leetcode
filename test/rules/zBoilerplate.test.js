import { zBoilerplate } from '../../src/rules/zBoilerplate';
import { inputData, expected } from '../mock/zBoilerplateData';

test('zBoilerplate should return expected result 1', () => {
  expect(zBoilerplate(inputData.case1)).toBe(expected.case1);
});

test('zBoilerplate should return expected result 2', () => {
  expect(zBoilerplate(inputData.case2)).toBe(expected.case2);
});
