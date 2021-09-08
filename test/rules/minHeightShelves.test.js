
import minHeightShelves from "../../src/rules/minHeightShelves/recursion-memo";

import { inputData, expected } from "../mock/minHeightShelvesData";

test("minHeightShelves should return expected result for case1", () => {
  const { books, shelfWidth } = inputData.case1;
  const result = minHeightShelves(books, shelfWidth);
  expect(result).toEqual(expected.case1);
});

test("minHeightShelves should return expected result for case2", () => {
  const { books, shelfWidth } = inputData.case2;
  const result = minHeightShelves(books, shelfWidth);
  expect(result).toEqual(expected.case2);
});

