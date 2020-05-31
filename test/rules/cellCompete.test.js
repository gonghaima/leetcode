import cellCompete from "../../src/rules/cellCompete";
import { inputData, expected } from "../mock/cellCompeteData";

test("cellCompete should return compete cells for test case 1", () => {
  const result = cellCompete(inputData.case1.states, inputData.case1.days);
  expect(result).toEqual(expected.case1);
});

test("cellCompete should return compete cells for test case 2", () => {
  const result = cellCompete(inputData.case2.states, inputData.case2.days);
  expect(result).toEqual(expected.case2);
});
