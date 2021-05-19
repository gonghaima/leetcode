
import minWindow from "../../src/rules/minWindow";

import { inputData, expected } from "../mock/minWindowData";

test("minWindow should return expected result for case1", () => {
  const { s, t } = inputData.case1;
  const result = minWindow(s, t);
  expect(result).toEqual(expected.case1);
});

test("minWindow should return expected result for case2", () => {
  const { s, t } = inputData.case2;
  const result = minWindow(s, t);
  expect(result).toEqual(expected.case2);
});

