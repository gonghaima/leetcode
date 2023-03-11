/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

// const IteratorModel = {
//   hasNext: () => {},
//   next: () => {},
//   nextItr: {},
// };

class IteratorModel {
  constructor(){
    hasNext: () => {};
    next: () => {};
    nextItr: {};
  }
  
};

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.root = new IteratorModel();

  this.currentItr = this.root;
  const addToIterator = (nl) => {
    for (let i = 0; i < nl.length; i++) {
      const ele = array[i];
      if (Array.isArray(ele)) {
        addToIterator(ele);
      }

      currentItr.moveToNext;
      currentItr.hasNext = () => true;
      currentItr.next = () => {
        this.currentItr = nextItr;
        return ele;
      };
      const newItr = new IteratorModel();
      const preIter = currentItr;
      currentItr = newItr;
      preIter.nextItr = currentItr;
    }
  };
  return this.root;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.currentItr.hasNext();
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.currentItr.next();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export default NestedIterator;
