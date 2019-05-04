import removeElements from "../../../src/rules/listNode/removeElements";
import { inputData, expected } from "../../mock/listNode/removeElementsData";
test("removeElements function should remove items with given value", () => {
  let result = removeElements(inputData.case1);
  let exp = expected.case1;
  while (result) {
    expect(result.val).toEqual(exp.val);
    expect(result.next.val).toEqual(exp.next.val);
    result = result.next;
    exp = exp.next;
  }
});
