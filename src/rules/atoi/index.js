/*******************************************************************************************************************************************************************************************************************************************************
 *                                                                                                                                                                                                                                                     *
 * parseInt already trims and ends on the first non - numeric character, 
 * so no trimming is needed.parseInt returns NaN on error which is not what the challenge wants,
 * but since both NaN and 0 are falsey, they can both be converted to 0 with || 0. *
 *                                                                                                                                                                                                                                                     *
 * using if statements for the range increases performance(92ms -> 88ms)                                                                                                                                                                               *
 *******************************************************************************************************************************************************************************************************************************************************/

export default str => {

  return Math.max(Math.min(parseInt(str, 10) || 0, 2147483647), -2147483648);
};
