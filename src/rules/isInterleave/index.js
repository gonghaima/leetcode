/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

/**
 * for each char in s3,
 * remove it from s1, if match
 * remove it from 22, if match
 * otherwise return false
 *
 * same process, but check s2 first, then s1
 */

var isInterleave = function(s1, s2, s3) {
  let dp = (p1, p2, p3) => {
    if (!isIL) return isIL;
    if (p1.length === 0 && p2.length === 0 && p3.length === 0) {
      isIL = true;
      return isIL;
    }

    if (p1[p1.length - 1] === char) return dp(p1.slice(-1), p2, p3, isIL);
    if (p2[p2.length - 1] === char) return dp(p1, p2.slice(-1), p3, isIL);
    notFound = false;
    return notFound;
  };

  let isIL = true;

  s1 = s1.split('');
  s2 = s1.split('');
  s3 = s3.split('');
  for (const char of s3) {
    if (s1[s1.length - 1] === char) return dp(s1.shift(), s2, s3.shift());
    if (s2[s2.length - 1] === char) return dp(s1, s2.shift(), s3.shift());
    if (s1[s1.length - 1] !== char && s2[s2.length - 1] !== char) isIL = false;
  }
  return isIL;
};

export default isInterleave;
