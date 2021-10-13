import toLower from '../../src/rules/toLowerCase';
import { inputData, expected } from '../data/toLowerCaseData';

test('toLowercase should convert all strings into lowercase', () => {
  expect(toLower(inputData.case1)).toBe(expected.case1);
});
