/************************************************************************************************************
 * Runtime: 84 ms, faster than 35.16% of JavaScript online submissions for 1-bit and 2-bit Characters.      *
 * Memory Usage: 38.8 MB, less than 33.79% of JavaScript online submissions for 1-bit and 2-bit Characters. *
 ************************************************************************************************************/


// Greedy

export default (bits) => {
  let i = bits.length - 2;
  while (i >= 0 && bits[i] > 0) i -= 1;
  return (bits.length - i) % 2 === 0;
};
