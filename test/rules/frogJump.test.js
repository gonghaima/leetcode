import frogJump from "../../src/rules/frogJump";
import { inputData, expected } from "../mock/frogJumpData";

test("frogJump should return true from a valid list", () => {
  const result = frogJump(inputData.case1);
  expect(result).toBe(expected.case1);
});

// test("frogJump should return false from an invalid list", () => {
//   const result = frogJump(inputData.case2);
//   expect(result).toBe(expected.case2);
// });
