/**
 * @param {string} s
 * @return {string[]}
 */

// The methodology of DFS is to use recursion to expore all the possibilities (nodes)

var removeInvalidParentheses = function(s) {
    // sanity check
    if (!s.length) return [""];

    /**
     * @param {Number} l - invalid '(' needs to be removed
     * @param {Number} r - invalid ')' needs to be removed
     * @param {Number} i - current position
     * @param {Number} a - current result assembly
     * @param {Number} c - bracket counter (check validness) 
     * when c < 0, it means we have an extra ')' up to the current point, 
     * which means the string will never be valid
     */
    var dfs = function(l, r, i, a, c) {
        if (l < 0 || r < 0 || c < 0) return;
        if (i == s.length) {
            if (l==0 && r==0 && c==0) result.add(a);
            return;
        }

        if (s[i] == '(' || s[i] == ')') {
            let f = s[i]=='('; // flag
            dfs(l, r, i+1, a+s[i], c+(f?1:-1)); // keep
            dfs(l-(f?1:0),r-(f?0:1), i+1, a, c) // remove
        } else {
            dfs(l, r, i+1, a+s[i], c);
        }
    }

    // count invalid parentheses
    let lc = 0, rc = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i] == '(') lc++;
        else if (s[i] == ')') {
            if (lc > 0) lc--;
            else rc++;
        }
    }

    let result = new Set();
    dfs(lc, rc, 0, "", 0);
    return [...result.values()];
}
export default removeInvalidParentheses;
