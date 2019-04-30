import getIntersectionNode from "../../../src/rules/listNode/getIntersectionNode";
import {
  inputData,
  expected
} from "../../mock/listNode/getIntersectionNodeData";
test("getIntersectionNode function should find the intersacted data", () => {
  expect(getIntersectionNode(inputData.case1)).toEqual(expected.case1);
  expect(getIntersectionNode(inputData.case2)).toEqual(expected.case2);
  expect(getIntersectionNode(inputData.case3)).toEqual(expected.case3);
});
