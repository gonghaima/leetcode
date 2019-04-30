import getIntersectionNode from "../../../src/rules/listNode/getIntersectionNode";
import {
  inputData,
  expected
} from "../../mock/listNode/getIntersectionNodeData";
test("getIntersectionNode function should find the intersacted data", () => {
  expect(
    getIntersectionNode(inputData.case1.headA, inputData.case1.headB).val
  ).toEqual(expected.case1);
  expect(
    getIntersectionNode(inputData.case2.headA, inputData.case2.headB).val
  ).toEqual(expected.case2);
  expect(
    getIntersectionNode(inputData.case3.headA, inputData.case3.headB)
  ).toEqual(expected.case3);
  expect(
    getIntersectionNode(inputData.case4.headA, inputData.case4.headB).val
  ).toEqual(expected.case4);

  expect(
    getIntersectionNode(inputData.case5.headA, inputData.case5.headB).val
  ).toEqual(expected.case5);

  expect(
    getIntersectionNode(inputData.case6.headA, inputData.case6.headB).val
  ).toEqual(expected.case6);
});
