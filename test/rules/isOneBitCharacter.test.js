// import isOneBitCharacter from "../../src/rules/isOneBitCharacter";
import isOneBitCharacter from "../../src/rules/isOneBitCharacter/greedy";

import { inputData, expected } from "../mock/isOneBitCharacterData";

test("isOneBitCharacter should satisfy all the given equations for case1", () => {
  const result = isOneBitCharacter(inputData.case1);
  expect(result).toEqual(expected.case1);
});

test("isOneBitCharacter should satisfy all the given equations for case2", () => {
  const result = isOneBitCharacter(inputData.case2);
  expect(result).toEqual(expected.case2);
});



