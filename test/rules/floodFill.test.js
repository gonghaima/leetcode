// import floodFill from "../../src/rules/floodFill/bfs";
import floodFill from "../../src/rules/floodFill/dfs";
import { inputData, expected } from "../mock/floodFillData";

test("floodFill should return correct answer - case 1", () => {
  const { image, sr, sc, newColor } = inputData.case1;
  const result = floodFill(image, sr, sc, newColor);
  expect(result.sort()).toEqual(expected.case1.sort());
});


test("floodFill should return correct answer - case 2", () => {
  const { image, sr, sc, newColor } = inputData.case2;
  const result = floodFill(image, sr, sc, newColor);
  expect(result.sort()).toEqual(expected.case2.sort());
});

test("floodFill should return correct answer - case 3", () => {
  const { image, sr, sc, newColor } = inputData.case3;
  const result = floodFill(image, sr, sc, newColor);
  expect(result.sort()).toEqual(expected.case3.sort());
});
