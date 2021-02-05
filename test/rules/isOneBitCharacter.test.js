import isOneBitCharacter from "../../src/rules/isOneBitCharacter";

import { inputData, expected } from "../mock/isOneBitCharacterData";

test("isOneBitCharacter should satisfy all the given equations for case1", () => {
  const result = isOneBitCharacter(inputData.case1);
  expect(result).toEqual(expected.case1);
});


