import { mergeTwoSortedNodes } from "../../src/rules/mergeTwoSortedNodes";
import { inputData, expected } from "../data/mergeTwoSortedNodesData";

test("the mergeTwoSortedNodes function will merge first case", () => {
  expect(mergeTwoSortedNodes(inputData.case1.l1, inputData.case1.l2)).toEqual(
    expected.case1
  );

  expect(mergeTwoSortedNodes(inputData.case2.l1, inputData.case2.l2)).toEqual(
    expected.case2
  );

  expect(mergeTwoSortedNodes(inputData.case3.l1, inputData.case3.l2)).toEqual(
    expected.case3
  );

  expect(mergeTwoSortedNodes(inputData.case4.l1, inputData.case4.l2)).toEqual(
    expected.case4
  );

  expect(mergeTwoSortedNodes(inputData.case5.l1, inputData.case5.l2)).toEqual(
    expected.case5
  );

  expect(mergeTwoSortedNodes(inputData.case7.l1, inputData.case7.l2)).toEqual(
    expected.case7
  );
  expect(mergeTwoSortedNodes(inputData.case8.l1, inputData.case8.l2)).toEqual(
    expected.case8
  );
});
