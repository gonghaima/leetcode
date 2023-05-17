import reverseKGroup from '../../src/rules/reverseKGroup';
import { inputData, expected } from '../data/reverseKGroupData';

test('reverseKGroup should return correct result for case1', () => {
  const { head, k } = inputData.case1;
  const result = reverseKGroup(head, k);
  console.log({result});
  let expectedResult = expected.case1;
  console.log({expectedResult});
  while (expectedResult?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});

test('reverseKGroup should return correct result for case2', () => {
  const { head, k } = inputData.case2;
  const result = reverseKGroup(head, k);
  let expectedResult = expected.case2;
  while (result?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});
