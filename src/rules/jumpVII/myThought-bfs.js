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
  //bfs
  const n = s.split('');
  const trackingResult = {};
  const range = maxJump - minJump;
  let reachable = false;

  if (range <= 0) return false;
  let firstKey = n.length - 1;
  let firstVal = n[n.length - 1];
  let firstItem = {};
  firstItem = { key: firstKey, val: '0' };
  let next = [firstItem];

  // while next.length,  --> find the previous available items, add into tempArray, replace next with tempArray
  while (next.length && !reachable) {
    debugger;
    let tmp = [];
    for (let i = 0; i < next.length; i++) {
      let nextItem = next[i];
      let startPoint = nextItem.key - maxJump;
      let endPoint = nextItem.key - minJump;
      for (let j = startPoint; j <= endPoint; j++) {
        if (j >= 0) {
          if (j === 0) reachable = true;
          if (n[j] === '0') tmp.push({ key: j, val: '0' });
        }
      }
    }
    next = tmp;
  }

  return reachable;
};

export default canReach;
