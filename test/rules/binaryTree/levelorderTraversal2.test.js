import levelorderTraversal2 from "../../../src/rules/binaryTree/levelorderTraversal2";
import {
  inputData,
  expected
} from "../../mock/binaryTree/levelorderTraversalData";

test("levelorderTraversal2 should return expected value", () => {
  const actual = levelorderTraversal2(inputData.case1);
  expect(actual[0][0]).toBe(expected.case1[0][0]);
  expect(actual[1][0]).toBe(expected.case1[1][0]);
  expect(actual[1][1]).toBe(expected.case1[1][1]);
  expect(actual[2][0]).toBe(expected.case1[2][0]);
  expect(actual[2][1]).toBe(expected.case1[2][1]);
});

// test('levelorderTraversal2 should return expected value in case2', () => {
//   const actual2 = levelorderTraversal2(inputData.case2);
//   expect(actual2[0][0]).toBe(expected.case2[0][0]);
//   expect(actual2[1][0]).toBe(expected.case2[1][0]);
//   expect(actual2[1][1]).toBe(expected.case2[1][1]);
//   expect(actual2[2][0]).toBe(expected.case2[2][0]);
//   expect(actual2[2][1]).toBe(expected.case2[2][1]);
// });

// test('levelorderTraversalSolution1 should return expected value', () => {
//   const actual = levelorderTraversalSolution1(inputData.case1);
//   expect(actual[0][0]).toBe(expected.case1[0][0]);
//   expect(actual[1][0]).toBe(expected.case1[1][0]);
//   expect(actual[1][1]).toBe(expected.case1[1][1]);
//   expect(actual[2][0]).toBe(expected.case1[2][0]);
//   expect(actual[2][1]).toBe(expected.case1[2][1]);
// });

// test('levelorderTraversalSolution1 should return expected value in case2', () => {
//   const actual2 = levelorderTraversalSolution1(inputData.case2);
//   expect(actual2[0][0]).toBe(expected.case2[0][0]);
//   expect(actual2[1][0]).toBe(expected.case2[1][0]);
//   expect(actual2[1][1]).toBe(expected.case2[1][1]);
//   expect(actual2[2][0]).toBe(expected.case2[2][0]);
//   expect(actual2[2][1]).toBe(expected.case2[2][1]);
// });
