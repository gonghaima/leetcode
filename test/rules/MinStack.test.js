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

test("MinStack should perform as expected for case1", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-1);
  const minNum = minStack.getMin(); //null
  const topNum = minStack.top();
  const popVal = minStack.pop();
  const minNum1 = minStack.getMin();

  expect(minNum).toEqual(-2);
  expect(topNum).toEqual(-1);
  expect(popVal).toEqual(null);
  expect(minNum1).toEqual(-2);
});
