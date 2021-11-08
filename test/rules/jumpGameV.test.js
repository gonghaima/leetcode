import jump from "../../src/rules/jumpV/segmentTree";
import { inputData, expected } from "../data/jumpVData";

test("jump should return the distance for case1", () => {
  const { arr, d } = inputData.case1;
  const result = jump(arr, d);
  expect(result).toBe(expected.case1);
});

// test("jump should return the distance for case2", () => {
//   const { arr, d } = inputData.case2;
//   const result = jump(arr, d);
//   expect(result).toBe(expected.case2);
// });

// test("jump should return the distance for case3", () => {
//   const { arr, d } = inputData.case3;
//   const result = jump(arr, d);
//   expect(result).toBe(expected.case3);
// });

// test("jump should return the distance for case4", () => {
//   const { arr, d } = inputData.case4;
//   const result = jump(arr, d);
//   expect(result).toBe(expected.case4);
// });

// test("jump should return the distance for case5", () => {
//   const { arr, d } = inputData.case5;
//   const result = jump(arr, d);
//   expect(result).toBe(expected.case5);
// });

// test("jump should return the distance for case6", () => {
//   const { arr, d } = inputData.case6;
//   const result = jump(arr, d);
//   expect(result).toBe(expected.case6);
// });