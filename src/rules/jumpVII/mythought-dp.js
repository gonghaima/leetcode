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
  //dp
  const n = s.split('');
  const trackingResult = {};
  const range = maxJump - minJump;
  if (range <= 0) return false;

  for (let i = 0; !trackingResult[n.length - 1] && i < n.length; i++) {
    const startPoint = i + minJump;
    if (n[i] === '0') {
      for (
        let j = startPoint;
        !trackingResult[n.length - 1] && j <= startPoint + range;
        j++
      ) {
        trackingResult[j] = true;
      }
    }
  }
  return trackingResult[n.length - 1] ? true : false;
};

export default canReach;
