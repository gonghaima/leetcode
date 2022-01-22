/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if(n <= 0) return false; // get rid of corner cases 
  if(n == 1) return true; // base case
  let t2 = 0, t3 = 0, t5 = 0; //pointers for 2, 3, 5
  // vector<int> k(n);
  const k = Array(n).fill(0)
  k[0] = 1;
  for(let i  = 1; i < n ; i ++)
  {
      k[i] = Math.min(k[t2]*2,Math.min(k[t3]*3,k[t5]*5));
      if(k[i] == k[t2]*2) t2++; 
      if(k[i] == k[t3]*3) t3++;
      if(k[i] == k[t5]*5) t5++;
  }
  return k[n-1];
};
export default nthUglyNumber;
