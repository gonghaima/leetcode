import linkedListCycle from "../../../src/rules/listNode/linkedListCycle";
import { inputData, expected } from "../../mock/listNode/linkedListCycleData";
test("linkedListCycle function should determine if there is a cycle", () => {
  expect(linkedListCycle(inputData.case1)).toEqual(expected.case1);
  expect(linkedListCycle(inputData.case2)).toEqual(expected.case2);
  expect(linkedListCycle(inputData.case3)).toEqual(expected.case3);
});
