/**
 * The intuition is, when you see a digit, you are not sure whether you should use or drop the digit, so you just save it into the stack for better decision later.
 * When there is a better candidate (a smaller digit) to use, you drop the saved bigger digit from the stack.
 * Look carefully, the elements in the stack are kept in increasing order.
 * So when a new candidate comes up, you can do a comparison to remove one or more of the saved digits, until you meet one in the stack that is not larger than the candidate.
 * This kind of stack is called Monotonous Increase Stack.
 * See this post for more info. At the end, it lists other problems that can solved using such kind of stack.
https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step
 */
export default (num, k) => {
  const stack = [];

  //corner case
  if (k === num.length) {
    return "0";
  }

  for (let i = 0; i < num.length; i++) {
    //whenever meet a digit which is less than the previous digit, discard the previous one
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k -= 1;
  }

  let i = 0;
  while (i < stack.length - 1) {
    if (stack[i] !== "0") break;
    i++;
  }

  return stack.slice(i).join("");
};
