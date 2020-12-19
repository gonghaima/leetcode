import findRedundantConnection from "../../src/rules/findRedundantConnection";
import findRedundantConnection_v2 from "../../src/rules/findRedundantConnection/unionFind_v2";
import findRedundantConnection_v3 from "../../src/rules/findRedundantConnection/unionFind_v3";
import findRedundantConnection_v4 from "../../src/rules/findRedundantConnection/unionFind_v4";
import { inputData, expected } from "../mock/findRedundantConnectionData";

// test("findRedundantConnection should find the number of direct related students, for case 1", () => {
//   const result = findRedundantConnection(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("findRedundantConnection should find the number of direct related students, for case 2", () => {
//   const result = findRedundantConnection(inputData.case2);
//   expect(result[0]).toBe(expected.case2[0]);
//   expect(result[1]).toBe(expected.case2[1]);
// });


// test("findRedundantConnection_v2 should find the number of direct related students, for case 1", () => {
//   const result = findRedundantConnection_v2(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("findRedundantConnection_v2 should find the number of direct related students, for case 2", () => {
//   const result = findRedundantConnection_v2(inputData.case2);
//   expect(result[0]).toBe(expected.case2[0]);
//   expect(result[1]).toBe(expected.case2[1]);
// });

// test("findRedundantConnection_v2 should find the number of direct related students, for case 3", () => {
//   const result = findRedundantConnection_v2(inputData.case3);
//   console.log(result);
//   expect(result[0]).toBe(expected.case3[0]);
//   expect(result[1]).toBe(expected.case3[1]);
// });


// test("findRedundantConnection_v3 should find the number of direct related students, for case 1", () => {
//   const result = findRedundantConnection_v3(inputData.case1);
//   expect(result).toEqual(expected.case1);
// });

// test("findRedundantConnection_v3 should find the number of direct related students, for case 2", () => {
//   const result = findRedundantConnection_v3(inputData.case2);
//   expect(result[0]).toBe(expected.case2[0]);
//   expect(result[1]).toBe(expected.case2[1]);
// });

// test("findRedundantConnection_v3 should find the number of direct related students, for case 3", () => {
//   const result = findRedundantConnection_v3(inputData.case3);
//   console.log(result);
//   expect(result[0]).toBe(expected.case3[0]);
//   expect(result[1]).toBe(expected.case3[1]);
// });

test("findRedundantConnection_v4 should find the number of direct related students, for case 3", () => {
  const result = findRedundantConnection_v4(inputData.case3);
  console.log(result);
  expect(result[0]).toBe(expected.case3[0]);
  expect(result[1]).toBe(expected.case3[1]);
});