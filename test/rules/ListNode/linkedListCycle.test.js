import linkedListCycle from "../../../src/rules/listNode/linkedListCycle";
import solution1 from "../../../src/rules/listNode/linkedListCycle/solution1";
import { inputData, expected } from "../../mock/ListNode/linkedListCycleData__";
test("linkedListCycle function should determine if there is a cycle", () => {
  expect(linkedListCycle(inputData.case1)).toEqual(expected.case1);
  expect(linkedListCycle(inputData.case2)).toEqual(expected.case2);
  expect(linkedListCycle(inputData.case3)).toEqual(expected.case3);
});

test("solution1 function should determine if there is a cycle", () => {
  expect(solution1(inputData.case1)).toEqual(expected.case1);
  expect(solution1(inputData.case2)).toEqual(expected.case2);
  expect(solution1(inputData.case3)).toEqual(expected.case3);
});
