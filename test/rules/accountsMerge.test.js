import accountsMerge from "../../src/rules/accountsMerge";

import { inputData, expected } from "../mock/accountsMergeData";

// test("accountsMerge should satisfy all the given equations for case 1", () => {
//   const result = accountsMerge(inputData.case1);
//   expect(result[0]).toEqual(expected.case1[0]);
//   expect(result[1]).toEqual(expected.case1[1]);
// });

// test("accountsMerge should satisfy all the given equations for case 2", () => {
//   const result = accountsMerge(inputData.case2);
//   debugger;
//   expect(result[0]).toEqual(expected.case2[0]);
// });

test("accountsMerge should satisfy all the given equations for case3", () => {
  const result = accountsMerge(inputData.case3);
  expect(result[0]).toEqual(expected.case3[0]);
});


