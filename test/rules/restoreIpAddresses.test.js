import restoreIpAddresses from '../../src/rules/restoreIpAddresses';
import { inputData, expected } from '../data/restoreIpAddressesData';

test('restoreIpAddresses should return correct result for case1', () => {
  const result = restoreIpAddresses(inputData.case1);
  expect(result).toEqual(expected.case1.sort());
});

test('restoreIpAddresses should return correct result for case2', () => {
  const result = restoreIpAddresses(inputData.case2);
  expect(result).toEqual(expected.case2.sort());
});

test('restoreIpAddresses should return correct result for case3', () => {
  const result = restoreIpAddresses(inputData.case3);
  expect(result).toEqual(expected.case3.sort());
});
