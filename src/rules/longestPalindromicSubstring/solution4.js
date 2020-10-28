export const longestPalindromeSolution4 = s => {
  const len = s.length;
  let left, right, full;
  let longest = '';
  let current = '';

  // reusable parse w/ recalculating limits
  const scan = (start, end, step) => {
    // i is center of search in index units of s
    for (let i = start; end(i); i += step) {
      // parse substring, full scan initially
      full = true
      // j = letters around i to check, start 1 beyond longest
      for (let j = (longest.length + 1) / 2; j < len / 2 + 1; j++) {
        // slicing cutoffs
        left = Math.ceil(i - j)
        right = Math.floor(i + j + 1) // +1 includes in slice
        // limits
        if (left < 0 || right > len) break
        // cuts from left to right - 1
        current = s.slice(left, right)
        if (isPalindrome(current, { full })) {
          // since j starts at new record, this is always longest
          longest = current
          // inside correct, no need to recheck inners
          full = false
        } else {
          break // clearly search at this i is over
        }
      }
    }
  }

  // best way to skip is to find long one in center
  // can exclude edges where next longest cannot fit

  // use () => val to constantly recalculate termination condition from "longest"
  // if longest is 5 chars, there's no point checking center 2 chars away from end

  // .5 steps for centers between letters, round steps for letters as centers

  // scan from center to right minus impossible to win area
  scan(len / 2, i => i < len - (longest.length / 2), 0.5)
  // scan from center to left minus impossible to win edge
  scan(len / 2 - 0.5, i => i >= longest.length / 2, -0.5)

  return longest
}

// if not full scan, only check outermost chars
const isPalindrome = (str, { full }) => {
  const len = str.length
  if (len <= 1) return true // terminate early
  for (let i = 0; i < (len - 1) / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false
    // if not full scan, only check outermost chars
    if (!full) break
  }
  return true
};
