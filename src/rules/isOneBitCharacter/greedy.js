/************************************************************************************************************
 * Runtime: 84 ms, faster than 35.16% of JavaScript online submissions for 1-bit and 2-bit Characters.      *
 * Memory Usage: 38.8 MB, less than 33.79% of JavaScript online submissions for 1-bit and 2-bit Characters. *
 ************************************************************************************************************/


// Greedy

/*******************************************************************************************************************************************************
 * The second-last 0 must be the end of a character (or, the beginning of the array if it doesn't exist).                                              *
 * Looking from that position forward, the array bits takes the form [1, 1, ..., 1, 0] where there are zero or more 1's present in total.              *
 * It is easy to show that the answer is true if and only if there are an even number of ones present.                                                 *
 *                                                                                                                                                     *
 * In our algorithm, we will find the second last zero by performing a linear scan from the right. We present two slightly different approaches below. *
 *******************************************************************************************************************************************************/

export default (bits) => {
  let i = bits.length - 2;
  while (i >= 0 && bits[i] > 0) i -= 1;
  return (bits.length - i) % 2 === 0;
};
