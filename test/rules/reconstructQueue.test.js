import reconstructQueue from "../../src/rules/reconstructQueue";
import { inputData, expected } from "../mock/reconstructQueueData";
test("reconstructQueue function should return correct array with expected sequences", () => {
  expect(reconstructQueue(inputData.case1)).toEqual(expected.case1);
});
