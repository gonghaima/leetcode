import makeConnected from "../../src/rules/makeConnected";

import { inputData, expected } from "../mock/makeConnectedData";

test("makeConnected should find the largest possible number of moves for case 1", () => {
  const result = makeConnected(inputData.case1.n, inputData.case1.connections);
  expect(result).toEqual(expected.case1);
});
