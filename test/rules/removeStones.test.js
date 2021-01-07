import removeStones from "../../src/rules/removeStones";
import removeStones_v1 from "../../src/rules/removeStones/unionFind_v1";
import removeStones_v1_enhanced from "../../src/rules/removeStones/unionFind_v1_enhanced";
import removeStones_v2 from "../../src/rules/removeStones/unionFind_v2";
import { inputData, expected } from "../mock/removeStonesData";

// test("removeStones should find the largest possible number of moves for case 1", () => {
//   const result = removeStones(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("removeStones should find the largest possible number of moves for case 2", () => {
//   const result = removeStones(inputData.case2);
//   expect(result).toBe(expected.case2);
// });


// test("removeStones should find the largest possible number of moves for case 3", () => {
//   const result = removeStones(inputData.case3);
//   expect(result).toBe(expected.case3);
// });

// test("removeStones should find the largest possible number of moves for case 4", () => {
//   const result = removeStones(inputData.case4);
//   expect(result).toBe(expected.case4);
// });

// test("removeStones_v1 should find the largest possible number of moves for case 1", () => {
//   const result = removeStones_v1(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("removeStones_v1 should find the largest possible number of moves for case 2", () => {
//   const result = removeStones_v1(inputData.case2);
//   expect(result).toBe(expected.case2);
// });


// test("removeStones_v1 should find the largest possible number of moves for case 3", () => {
//   const result = removeStones_v1(inputData.case3);
//   expect(result).toBe(expected.case3);
// });

// test("removeStones_v1 should find the largest possible number of moves for case 4", () => {
//   const result = removeStones_v1(inputData.case4);
//   expect(result).toBe(expected.case4);
// });

// test("removeStones_v1_enhanced  should find the largest possible number of moves for case 1", () => {
//   const result = removeStones_v1_enhanced(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("removeStones_v1_enhanced  should find the largest possible number of moves for case 2", () => {
//   const result = removeStones_v1_enhanced(inputData.case2);
//   expect(result).toBe(expected.case2);
// });


// test("removeStones_v1_enhanced  should find the largest possible number of moves for case 3", () => {
//   const result = removeStones_v1_enhanced(inputData.case3);
//   expect(result).toBe(expected.case3);
// });

// test("removeStones_v1_enhanced  should find the largest possible number of moves for case 4", () => {
//   const result = removeStones_v1_enhanced(inputData.case4);
//   expect(result).toBe(expected.case4);
// });

test("removeStones_v2 should find the largest possible number of moves for case 1", () => {
  const result = removeStones_v2(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("removeStones_v2 should find the largest possible number of moves for case 2", () => {
  const result = removeStones_v2(inputData.case2);
  expect(result).toBe(expected.case2);
});


test("removeStones_v2 should find the largest possible number of moves for case 3", () => {
  const result = removeStones_v2(inputData.case3);
  expect(result).toBe(expected.case3);
});

test("removeStones_v2 should find the largest possible number of moves for case 4", () => {
  const result = removeStones_v2(inputData.case4);
  expect(result).toBe(expected.case4);
});
