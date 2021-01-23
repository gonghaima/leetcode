import accountsMerge from "../../src/rules/accountsMerge";

import { inputData, expected } from "../mock/accountsMergeData";

test("accountsMerge should satisfy all the given equations for case 1", () => {
  const result = accountsMerge(inputData.case1);
  expect(result).toEqual(expected.case1);
});


