import floodFill from "../../src/rules/floodFill";
import { inputData, expected } from "../mock/floodFillData";

test("floodFill should return correct answer - case 1", () => {
  const { image, sr, sc, newColor } = inputData.case1;
  const result = floodFill(image, sr, sc, newColor);
  expect(result.sort()).toEqual(expected.case1.sort());
});
