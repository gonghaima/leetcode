import { mergeTwoLists } from "../../src/rules/mergeTwoSortedLists";
import { inputData, expected } from "../data/mergeTwoSortedListsData";

test("the mergeTwoSortedListsData function  will merge first case", () => {
  expect(mergeTwoLists(inputData.case1.l1, inputData.case1.l2)).toEqual(
    expected.case1
  );
});
