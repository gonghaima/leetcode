/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch2 = (s, p) => {
    // early return when pattern is empty
    if (!p) {
		// returns true when string and pattern are empty
		// returns false when string contains chars with empty pattern
        return !s;
    }
    
	// check if the current char of the string and pattern match when the string has chars
    const hasFirstCharMatch = Boolean(s) && (p[0] === '.' || p[0] === s[0]);

    // track when the next character * is next in line in the pattern
    if (p[1] === '*') {
        // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
        // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
		// If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
        return (
            isMatch2(s, p.slice(2)) || 
            (hasFirstCharMatch && isMatch2(s.slice(1), p))
        );
    }
    
    // now we know for sure that we need to do 2 simple actions
	// check the current pattern and string chars
	// if so, then can proceed with next string and pattern chars (s+1, p+1)
    return hasFirstCharMatch ? isMatch2(s.slice(1), p.slice(1)) : false;
};

export default isMatch2;