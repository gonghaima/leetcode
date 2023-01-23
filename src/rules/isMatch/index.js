/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// two pointer

var isMatch = function(s, p) {
  let sIndex = 0, pIndex = 0, star, ss = sIndex
  while(sIndex < s.length) {
      console.log(sIndex, pIndex, star, ss)
      if (p[pIndex] == "?" || p[pIndex] == s[sIndex]) { sIndex++; pIndex++ }
      else if (p[pIndex] == "*") { star = pIndex++; ss = sIndex }
      else if (star != undefined) { pIndex = star + 1; sIndex = ++ss }
      else return false
  }
  while(p[pIndex] == "*") {pIndex++}
  return pIndex == p.length
}

export default isMatch;
