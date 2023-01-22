/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // two pointers
  let sIdx = 0;
  let pIdx = 0;
  let valid = true;

  const isStar = (c) => c === "*";
  const isQuestionMark = (c) => c === "?";

  const handleStar = (sI, currentPattern) => {
    sI++;
    while (s[sI] === currentPattern) {
      sI++;
    }
    return sI;
  };

  // check condition
  while (sIdx < s.length && pIdx < p.length && valid) {
    const pChar = p[pIdx];
    const sChar = s[sIdx];

    if (isStar(pChar)) {
      // handle star
      sIdx = handleStar(sIdx, sChar);
    } else if (isQuestionMark(pChar)) {
      // handle question mark
      sIdx++;
      pIdx++;
    } else {
      // handle exact match
      if (pChar !== sChar) {
        valid = false;
      } else {
        sIdx++;
        pIdx++;
      }
    }
  }

  if (pIdx === p.length && sIdx < s.length) return false;

  return valid;
};

export default isMatch;
