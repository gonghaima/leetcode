import sockMerchant from '../../src/rules/sockMerchant';
import { inputData, expected } from '../data/sockMerchantData';
test('sockMerchant function should return correct pairs of sock from case1 data', () => {
  expect(sockMerchant(inputData.case1.n, inputData.case1.ar)).toBe(
    expected.case1
  );
});
