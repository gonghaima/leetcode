export const inputData = {
  case1: ["a==b", "b!=a"],
  case2: ["b==a", "a==b"],
  case3: ["a==b", "b==c", "a==c"],
  case4: ["a==b", "b!=c", "c==a"],
  case5: ["c==c", "b==d", "x!=z"],
  case6: ["a!=a"],
  case7: ["e!=c", "b!=b", "b!=a", "e==d"],
  case8: ["f==e", "e==a", "a==a", "e==a", "b!=b"],
  case9: ["c==p", "h!=b", "j!=f", "w==y", "b==u", "y==t", "c==e", "k==g", "a==u", "i==k", "t==n", "k!=a", "y==n", "c!=n", "s!=l", "p!=y", "i!=y", "e!=t", "l!=u", "y==t", "u!=m", "k!=d", "p!=w", "j!=y", "n!=u", "e!=x", "w!=l", "u!=f", "u!=d", "g!=q", "k!=p", "b!=o", "f!=h", "u!=s", "q!=s", "b!=c", "f!=j", "k!=t", "j!=r", "y!=f", "j!=n", "o!=d", "q!=t", "p!=l", "p!=u", "u!=i", "f!=x", "u!=o", "y!=c", "l!=m", "r!=t", "i==k", "o!=s", "x!=i", "p!=j", "l!=r", "o!=s", "c!=q", "p!=f", "v==e", "p!=h", "c!=r", "r!=w", "o!=v", "y==y", "f!=k", "p!=u", "i!=x", "c!=u", "n!=a", "t!=c", "y!=r", "u==b", "q!=c", "p!=t", "g!=x", "b!=y", "j!=k", "i!=r", "j!=n", "w!=m", "a!=e", "o!=h", "t!=p", "u==a", "w!=u", "d!=l", "q!=n", "n!=v", "g!=f", "p!=m", "b!=h", "c!=h", "l!=g", "n!=j", "r!=g", "h!=f", "i!=f", "g!=o", "n==v"]
};

export const expected = {
  case1: false,
  case2: true,
  case3: true,
  case4: false,
  case5: true,
  case6: false,
  case7: false,
  case8: false,
  case9:false
};
