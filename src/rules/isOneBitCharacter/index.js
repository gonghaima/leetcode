/************************************************************************************************************
 * Runtime: 76 ms, faster than 83.56% of JavaScript online submissions for 1-bit and 2-bit Characters.      *
 * Memory Usage: 38.5 MB, less than 85.84% of JavaScript online submissions for 1-bit and 2-bit Characters. *
 ************************************************************************************************************/


// Increment Pointer

export default (bits) => {
  while (bits.length > 1) {
    if (bits.shift() === 1) bits.shift();
  }
  return bits.length === 1;
};
