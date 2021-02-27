// import updateMatrix from "../../src/rules/updateMatrix/bfs";
import updateMatrix from "../../src/rules/updateMatrix/bfs-v1";

import { inputData, expected } from "../mock/updateMatrixData";

test("updateMatrix should return expected result - case 1", () => {
  const result = updateMatrix(inputData.case1);
  expect(result.sort()).toEqual(expected.case1.sort());
});

test("updateMatrix should return expected result - case 2", () => {
  const result = updateMatrix(inputData.case2);
  expect(result.sort()).toEqual(expected.case2.sort());
});
