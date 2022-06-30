/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/masking-personal-information/discuss/1004179/JavaScript-Solution

/*************************************************************************************************************
 * Runtime: 100 ms, faster than 23.08% of JavaScript online submissions for Masking Personal Information.    *
 * Memory Usage: 42.3 MB, less than 7.69% of JavaScript online submissions for Masking Personal Information. *
 *************************************************************************************************************/

var maskPII = function(S) {
  if (isEmail(S)) return maskEmail(S);
  return maskPhone(S);

  function isEmail(str) {
    return /^[A-Za-z]{2,}@[A-Za-z]{2,}.[A-Za-z]{2,}$/.test(str);
  }

  function maskEmail(str) {
    let res = '';
    const [local, domain] = str.split('@');

    res +=
      local.charAt(0).toLowerCase() +
      '*****' +
      local.charAt(local.length - 1).toLowerCase();
    return res + '@' + domain.toLowerCase();
  }

  function maskPhone(str) {
    const onlyDigits = str.replace(/\D/g, '');

    const localNum = '***-***-' + onlyDigits.substring(onlyDigits.length - 4);

    if (onlyDigits.length === 10) return localNum;

    let countryNum = '+' + '*'.repeat(onlyDigits.length - 10) + '-';

    return countryNum + localNum;
  }
};

export default maskPII;
