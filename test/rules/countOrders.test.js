import countOrders from '../../src/rules/countOrders/recursion';
import { inputData, expected } from '../data/countOrdersData';

test('countOrders should return correct result for case1', () => {
  const result = countOrders(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test('countOrders should return correct result for case2', () => {
  const result = countOrders(inputData.case2);
  expect(result).toEqual(expected.case2);
});

test('countOrders should return correct result for case3', () => {
  const result = countOrders(inputData.case3);
  expect(result).toEqual(expected.case3);
});
