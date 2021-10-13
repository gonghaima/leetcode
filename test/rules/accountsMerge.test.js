// import accountsMerge from "../../src/rules/accountsMerge";
// import accountsMerge from "../../src/rules/accountsMerge/dfs";
// import accountsMerge from "../../src/rules/accountsMerge/unionFind_v1";
import accountsMerge from "../../src/rules/accountsMerge/unionFind_v2";

import { inputData, expected } from "../data/accountsMergeData";

// test("accountsMerge should satisfy all the given equations for case 1", () => {
//   const result = accountsMerge(inputData.case1);
//   expect(result.sort()[0]).toEqual(expected.case1.sort()[0]);
//   expect(result.sort()[1]).toEqual(expected.case1.sort()[1]);
// });

// test("accountsMerge should satisfy all the given equations for case 2", () => {
//   const result = accountsMerge(inputData.case2);
//   debugger;
//   expect(result[0]).toEqual(expected.case2[0]);
// });

// test("accountsMerge should satisfy all the given equations for case3", () => {
//   const result = accountsMerge(inputData.case3);
//   expect(result[0]).toEqual(expected.case3[0]);
// });

test("accountsMerge should satisfy all the given equations for case4", () => {
  const result = accountsMerge(inputData.case4);
  expect(result.sort()[0]).toEqual(expected.case4.sort()[0]);
});


