import subdomainVisits from '../../src/rules/subdomainVisits';
import { inputData, expected } from '../data/subdomainVisitsData';

test('subdomainVisits should return expected result for case1', () => {
  const result = subdomainVisits(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});
test('subdomainVisits should return expected result for case2', () => {
  const result = subdomainVisits(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
