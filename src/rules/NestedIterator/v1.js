/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
function flatten(nestedList, r = []) {
  while (nestedList.length) {
    const a = nestedList.shift();
    a.isInteger() ? r.push(a.getInteger()) : flatten(a.getList(), r);
  }
  return r;
}

function NestedIterator(nestedList) {
  this.queue = flatten(nestedList);
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.queue.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.queue.shift();
};
export default NestedIterator;
