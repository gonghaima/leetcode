/************************************************************************************************************
 * Runtime: 76 ms, faster than 83.56% of JavaScript online submissions for 1-bit and 2-bit Characters.      *
 * Memory Usage: 38.5 MB, less than 85.84% of JavaScript online submissions for 1-bit and 2-bit Characters. *
 ************************************************************************************************************/


// Increment Pointer

export default (bits) => {
  let i = bits.length - 2;
  while (i >= 0 && bits[i] > 0) i -= 1;
  return (bits.length - i) % 2 === 0;
};
