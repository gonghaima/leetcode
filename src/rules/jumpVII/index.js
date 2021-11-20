/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

// my thought

// dp
/**
 * 1. mark an array for destination, defaullt false
 * 2. for each of the idex, mark index + availableRange (maxJump - minJump) as true
 * 3. return s.length-1 index value from destination array
 */

// bfs - buttom up
/**
 * 1. start from the last item of s, next = [lastItem]
 * 2. while next.length,  --> find the previous available items, add into tempArray, replace next with tempArray
 * 3. if one of the previous item is 0, return true
 * 4. return false
 */

var canReach = function(s, minJump, maxJump) {
  return null;
};

export default canReach;
