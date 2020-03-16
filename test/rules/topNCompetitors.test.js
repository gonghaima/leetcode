import topNCompetitorsFunc from "../../src/rules/topNCompetitors";
import { inputData, expected } from "../mock/topNCompetitorsData";


// const topNCompetitors = (numCompetitors, topNCompetitors, competitors, numReviews, reviews) => {
//   return ["one", "two"];
// };


test("topNCompetitors should return max profit from a given list", () => {
  const { numCompetitors, topNCompetitors, competitors, numReviews, reviews } = inputData.case1;
  const result = topNCompetitorsFunc(numCompetitors, topNCompetitors, competitors, numReviews, reviews);
  expect(result).toEqual(expected.case1);
});

// test("topNCompetitors should return 0, when there is no transaction available", () => {
//   const result = topNCompetitors(inputData.case2);
//   expect(result).toBe(expected.case2);
// });
