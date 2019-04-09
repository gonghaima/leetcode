import sameTree from "../../../src/rules/binaryTree/sameTree";
import { inputData, expected } from "../../mock/binaryTree/sameTreeData";

test("sameTree should return true for the trees with same value and same structure", () => {
  const actual = sameTree(inputData.case1.a, inputData.case1.a);
  expect(actual).toBe(expected.case1);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case2.a, inputData.case2.b);
  expect(actual).toBe(expected.case2);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case3.a, inputData.case3.a);
  expect(actual).toBe(expected.case3);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case4.a, inputData.case4.a);
  expect(actual).toBe(expected.case4);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case5.a, inputData.case5.b);
  expect(actual).toBe(expected.case5);
});

test("sameTree should return false for trees with different structure", () => {
  const actual = sameTree(inputData.case6.a, inputData.case6.b);
  expect(actual).toBe(expected.case6);
});
