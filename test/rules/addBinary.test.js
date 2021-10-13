import addBinary from "../../src/rules/addBinary";
import { inputData, expected } from "../data/addBinaryData";
test("addBinary function should calculate correct result from cases data", () => {
  expect(addBinary(inputData.case1.a, inputData.case1.b)).toEqual(
    expected.case1
  );
  expect(addBinary(inputData.case2.a, inputData.case2.b)).toEqual(
    expected.case2
  );
});
