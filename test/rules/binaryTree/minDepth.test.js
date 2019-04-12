import minDepth from "../../../src/rules/binaryTree/minDepth";
import { inputData, expected } from "../../mock/binaryTree/minDepthData";

test("minDepth should return expected value", () => {
  const actual = minDepth(inputData.case1);
  expect(actual).toBe(expected.case1);
});
