import sameTree from "../../../src/rules/binaryTree/sameTree";
import { inputData, expected } from "../../mock/binaryTree/sameTreeData";

test("sameTree should return true for the trees with same value and same structure", () => {
  const actual = sameTree(inputData.case1.a, inputData.case1.a);
  expect(actual).toBe(expected.case1);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case2.a, inputData.case2.a);
  expect(actual).toBe(expected.case2);
});
