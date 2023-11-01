var RandomizedSet = function() {};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  this.cur = this.cur ?? new Set();
  if (this.cur.has(val)) {
    return false;
  } else {
    this.cur.add(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  this.cur = this.cur ?? new Set();
  if (this.cur.has(val)) {
    this.cur.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomElement = [...this.cur][Math.floor(Math.random() * [...this.cur].length)];
  return randomElement;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export default RandomizedSet;
