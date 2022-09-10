import spiralOrder from '../../src/rules/spiralOrder';
import { inputData, expected } from '../data/spiralOrderData';

test('spiralOrder should return expected result for case1', () => {
  const result = spiralOrder(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test('spiralOrder should return expected result for case2', () => {
  const result = spiralOrder(inputData.case2);
  expect(result).toEqual(expected.case2);
});
