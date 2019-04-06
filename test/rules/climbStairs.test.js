import climbStairs from "../../src/rules/climbStairs";
import { inputData, expected } from "../mock/climbStairsData";
test("climbStairs function should increase one from last item from cases data", () => {
  // expect(climbStairs(inputData.case1)).toEqual(expected.case1);
  // expect(climbStairs(inputData.case2)).toEqual(expected.case2);
  // expect(climbStairs(inputData.case3)).toEqual(expected.case3);
  expect(climbStairs(inputData.case4)).toEqual(expected.case4);
  // expect(climbStairs(inputData.case5)).toEqual(expected.case5);
});
