import surroundedRegions from "../../src/rules/surroundedRegions";

import { inputData, expected } from "../mock/surroundedRegionsData";

test("surroundedRegions should satisfy all the given equations for case1", () => {
  const result = surroundedRegions(inputData.case1);
  expect(result.sort()[0]).toEqual(expected.case1.sort()[0]);
});


