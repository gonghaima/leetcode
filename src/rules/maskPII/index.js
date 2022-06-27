/**
 * @param {string} s
 * @return {string}
 */

// regex repeat
// https://leetcode.com/problems/masking-personal-information/discuss/1136228/intuitive-13-line-JS-solution-or-97.22-faster-86.11-memory-usage

/*************************************************************************************************************
 * Runtime: 67 ms, faster than 69.23% of JavaScript online submissions for Masking Personal Information.     *
 * Memory Usage: 42.3 MB, less than 7.69% of JavaScript online submissions for Masking Personal Information. *
 *************************************************************************************************************/

var maskPII = function(S) {
  if (S.includes('@') && S.includes('.')) {
    // is email
    const elements = S.split('@');
    const name = elements[0];
    return `${name[0].toLowerCase()}*****${name[
      name.length - 1
    ].toLowerCase()}@${elements[1].toLowerCase()}`;
  } else {
    const stripped = S.replace(/\D/g, '');
    const lastFour = stripped.slice(stripped.length - 4);
    if (stripped.length === 10) {
      return `***-***-${lastFour}`;
    } else {
      return `+${'*'.repeat(stripped.length - 10)}-***-***-${lastFour}`;
    }
  }
};

export default maskPII;
