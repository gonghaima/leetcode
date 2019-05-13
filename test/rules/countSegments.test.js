import countSegments from "../../src/rules/countSegments";
import { inputData, expected } from "../mock/countSegmentsData";

test("countSegments should return correct number from a given string", () => {
  const result = countSegments(inputData.case1);
  expect(result).toBe(expected.case1);
});
