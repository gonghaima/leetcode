import { sumOfLeftLeaves } from "../../../src/rules/binaryTree/sumOfLeftLeaves";
import { inputData, expected } from "../../mock/binaryTree/sumOfLeftLeavesData";

test("sumOfLeftLeaves should return expected value", () => {
  const actual = sumOfLeftLeaves(inputData.case1);
  expect(actual).toBe(expected.case1);
});
