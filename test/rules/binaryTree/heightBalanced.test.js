import heightBalanced from "../../../src/rules/binaryTree/heightBalanced";
import { inputData, expected } from "../../mock/binaryTree/heightBalancedData";

test("heightBalanced should return expected value", () => {
  expect(heightBalanced(inputData.case1)).toBe(expected.case1);
  expect(heightBalanced(inputData.case2)).toBe(expected.case2);
});
