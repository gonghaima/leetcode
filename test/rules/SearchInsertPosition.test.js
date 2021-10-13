import { searchInsert } from "../../src/rules/SearchInsertPosition";
import { inputData, expected } from "../data/SearchInsertPositionData";

test("the SearchInsertPosition function  will validate first case", () => {
  expect(searchInsert(inputData.case1.nums, inputData.case1.target)).toEqual(
    expected.case1
  );

  expect(searchInsert(inputData.case2.nums, inputData.case2.target)).toEqual(
    expected.case2
  );

  expect(searchInsert(inputData.case3.nums, inputData.case3.target)).toEqual(
    expected.case3
  );

  expect(searchInsert(inputData.case4.nums, inputData.case4.target)).toEqual(
    expected.case4
  );
});
