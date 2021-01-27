/************************************************************************************************
 * Runtime: 164 ms, faster than 67.64% of JavaScript online submissions for Accounts Merge.     *
 * Memory Usage: 51.9 MB, less than 55.23% of JavaScript online submissions for Accounts Merge. *
 ************************************************************************************************/

/**************************************************************************************************************************
 * As in Approach #1, draw edges between emails if they occur in the same account.                                        *
 * For easier interoperability between our DSU template, we will map each email to some integer index by using emailToID. *
 * Then, dsu.find(email) will tell us a unique id representing what component that email is in.                           *
 **************************************************************************************************************************/

class DSU {
  constructor(n) {
    this.parent = [...Array(n).keys()];
  }
  find(x) {
    // find the root parent
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    // set y as x's parent
    this.parent[this.find(x)] = this.find(y);
  }
}

export default (accounts) => {
  let dsu = new DSU(10001),
    em_to_name = {},
    em_to_id = {},
    i = 0;

  accounts.map(acc => {
    const [name, ...emails] = acc;
    emails.map(email => {
      em_to_name[email] = name;
      if ((!em_to_id[email]) && (em_to_id[email] !== 0)) {
        em_to_id[email] = i;
        i += 1;
      }
      dsu.union(em_to_id[acc[1]], em_to_id[email]);
    });
  });
  let ans = {};
  Object.entries(em_to_name).map(([email,]) => {
    const index = dsu.find(em_to_id[email]);
    ans[index] = ans[index] ? ans[index] : new Set();
    ans[dsu.find(em_to_id[email])].add(email);
  });
  return Object.entries(ans).map(([_, dataSet]) => {
    const sorted = [...dataSet].sort();
    const name = em_to_name[sorted[0]];
    return [name, ...sorted];
  });
};
