import rotate from "../../src/rules/rotate";
import { inputData, expected } from "../data/rotateData";

test("rotate should return rotated data from case 1", () => {
  const result = rotate(inputData.case1.nums, inputData.case1.k);
  expect(result).toEqual(expected.case1);
});

test("rotate should return rotated data from case 2", () => {
  const result = rotate(inputData.case2.nums, inputData.case2.k);
  expect(result).toEqual(expected.case2);
});
