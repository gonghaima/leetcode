import swapPairs from '../../src/rules/swapPairs';

import { inputData, expected } from '../data/swapPairsData';

test('swapPairs should satisfy all the given equations for case1', () => {
  const head = inputData.case1;
  let result = swapPairs(head);
  let expectedResult = expected.case1;
  while (result?.val) {
    expect(result.val).toEqual(expectedResult.val);
    result = result.next ?? null;
    expectedResult = expectedResult.next ?? null;
  }
});
