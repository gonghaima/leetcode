import numOfMinutes from "../../src/rules/numOfMinutes";

import { inputData, expected } from "../mock/numOfMinutesData";

test("numOfMinutes should return the number of isolated island - case 1", () => {
  const result = numOfMinutes(inputData.case1);
  expect(result).toBe(expected.case1);
});

