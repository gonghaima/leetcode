import trap from "../../src/rules/trap";
import { inputData, expected } from "../data/trapData";

test("trap should return expected result for case1", () => {
  const result = trap(inputData.case1);
  expect(result).toEqual(expected.case1);
});
test("trap should return expected result for case2", () => {
  const result = trap(inputData.case2);
  expect(result).toEqual(expected.case2);
});

