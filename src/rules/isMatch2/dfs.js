/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) {    
    
  const dp = Array.from({length:s.length+1}, () => Array.from({length:p.length+1}));
  dp[s.length][p.length] = true;
  
  const recurse = (i,j) => {
      if(dp[i][j] !== undefined) return dp[i][j];

      // Check whether this character matches the pattern
      const matchesChar = i < s.length && (p[j] === '.' || s[i] === p[j]);

      // If the character after this is a * then we can either continue the pattern
      // or abort by completely skipping over both characters
      if(j +1 < p.length && p[j+1] === '*') {
          dp[i][j] = recurse(i,j+2) || matchesChar && recurse(i+1,j);
      } else {
          // Otherwise we simply match the character and continue onwards
          dp[i][j] = matchesChar && recurse(i+1,j+1);
      }
      
      return dp[i][j];
  }
  
  return recurse(0,0);
};

export default isMatch2;