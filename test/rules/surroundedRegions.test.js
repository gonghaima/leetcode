// import surroundedRegions from "../../src/rules/surroundedRegions";
// import surroundedRegions from "../../src/rules/surroundedRegions/dfs";
import surroundedRegions from "../../src/rules/surroundedRegions/unionFind";

import { inputData, expected } from "../data/surroundedRegionsData";

test("surroundedRegions should satisfy all the given equations for case1", () => {
  const result = surroundedRegions(inputData.case1);
  expect(result.sort()[0]).toEqual(expected.case1.sort()[0]);
});


