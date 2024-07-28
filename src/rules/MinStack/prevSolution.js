/**
 * initialize your data structure here.
 */
let MinStack = function() {
  this.num = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.num.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.num.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.num[this.num.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const minVal = Math.min(...this.num);
  return minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export { MinStack };
