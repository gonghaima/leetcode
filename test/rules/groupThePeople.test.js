import groupThePeople from "../../src/rules/groupThePeople";
import { inputData, expected } from "../mock/groupThePeopleData";

test("groupThePeople should return a grouped Ids in case1", () => {
  const result = groupThePeople(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("groupThePeople should return a grouped Ids in case2", () => {
  const result = groupThePeople(inputData.case2);
  expect(result).toEqual(expected.case2);
});
