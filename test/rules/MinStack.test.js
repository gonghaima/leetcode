import { MinStack } from "../../src/rules/MinStack";

test("MinStack should perform as expected", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  const minNum = minStack.getMin();
  expect(minNum).toEqual(-3);

  minStack.pop();
  const topNum = minStack.top();
  expect(topNum).toEqual(0);

  const minNum2 = minStack.getMin();
  expect(minNum2).toEqual(-2);
});
