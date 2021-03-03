import shortestPathBinaryMatrix from "../../src/rules/shortestPathBinaryMatrix";
import { inputData, expected } from "../mock/shortestPathBinaryMatrixData";

test("shortestPathBinaryMatrix should return the distance for case1", () => {
  const result = shortestPathBinaryMatrix(inputData.case1);
  expect(result).toBe(expected.case1);
});

// test("shortestPathBinaryMatrix should return the distance for case2", () => {
//   const result = shortestPathBinaryMatrix(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

// test("shortestPathBinaryMatrix should return the distance for case3", () => {
//   const result = shortestPathBinaryMatrix(inputData.case3);
//   expect(result).toBe(expected.case3);
// });


