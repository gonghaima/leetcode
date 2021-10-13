// import shortestPathBinaryMatrix from "../../src/rules/shortestPathBinaryMatrix";
import shortestPathBinaryMatrix from "../../src/rules/shortestPathBinaryMatrix/bfs-v1";
import { inputData, expected } from "../data/shortestPathBinaryMatrixData";

// test("shortestPathBinaryMatrix should return the distance for case1", () => {
//   const result = shortestPathBinaryMatrix(inputData.case1);
//   expect(result).toBe(expected.case1);
// });

// test("shortestPathBinaryMatrix should return the distance for case2", () => {
//   const result = shortestPathBinaryMatrix(inputData.case2);
//   expect(result).toBe(expected.case2);
// });

// test("shortestPathBinaryMatrix should return the distance for case3", () => {
//   const result = shortestPathBinaryMatrix(inputData.case3);
//   expect(result).toBe(expected.case3);
// });

// test("shortestPathBinaryMatrix should return the distance for case4", () => {
//   const result = shortestPathBinaryMatrix(inputData.case4);
//   expect(result).toBe(expected.case4);
// });

// test("shortestPathBinaryMatrix should return the distance for case5", () => {
//   const result = shortestPathBinaryMatrix(inputData.case5);
//   expect(result).toBe(expected.case5);
// });

test("shortestPathBinaryMatrix should return the distance for case6", () => {
  const result = shortestPathBinaryMatrix(inputData.case6);
  expect(result).toBe(expected.case6);
});



