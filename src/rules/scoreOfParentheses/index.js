/**
 * @param {string} s
 * @return {number}
 */

/***********************************************************************************************************************
 * My thoughts                                                                                                         *
 * - a while loop with a pointer initial position 0 , a current accumulated counter start with 0, a score start with 0 *
 * - keep increase pointer and accumulated counter, util see ')'                                                       *
 * - if accumulated counter is 1 , score += 1;                                                                         *
 * - else score += 2 power by accumulatedCounter                                                                       *
 * - pointer += accumulatedCounter                                                                                     *
 * return scroe                                                                                                        *
 ***********************************************************************************************************************/


var scoreOfParentheses = function(s) {
  return NaN;
};

export default scoreOfParentheses;
