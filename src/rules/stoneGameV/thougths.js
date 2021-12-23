/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
  /**
   * dfs - memo
   * for each combination, find out the total value Alice can get
   * find out the max value
   *
   * // with memo
   *
   * const memo = new Map();
   *
   * const dfs = sv => {
   *  if(!sv.length) return 0;
   *  if(sv.length===1)return sv[0];
   *  if (sv.length==2) return Math.min(sv[0], sv[1]);
   *  let maxVal = Number.maxSaftInteger;
   *  for (let i=1; i<sv.length; i++){
   *    const left = sv.slice(0 , i);
   *    const right = sv.slice(-(sv.length-i));
   *
   *    const leftTotal = left.reduce((a,b)=>a+b);
   *    const rightTotal = right.reduce((a,b)=>a+b);
   *    let total = 0;
   *    if (memo.has(i))total+= memo.get(i);
   *    else if (leftTotal === rightTotal)
   *      total += leftTotal + Math.max(dfs(rightTotal),dfs(leftTotal));
   *    else
   *      total += Math.max(leftTotal, rightTotal) + leftTotal>rightTotal?dfs(rightTotal):dfs(leftTotal);
   *    memo.set(i, total);
   *    maxVal = Math.max(total, maxVal);
   *  }
   * }
   * return dfs(stoneValue);
   */

  /**
   * top down
   *
   * calculate totalSum from i to the end
   * const totalSum = new Array(stoneValue.length);
   * totalSum[stoneValue.length-1] = stoneValue[stoneValue.length-1];
   * for (let i = stoneValue.length-2; i >=0; i--){
   *   totalSum[i] = stoneValue[i]+totalSum[i+1];
   * };
   *
   * let maxTotal = Number.minSafeInteger;
   *
   * const memo = new Map();
   *
   * const helper = (stoneValue) => {
   *  for (let i = 1; i<stoneValue.length; i++){
   *  if(memo.has(i))return memo.get(i);
   *  const left = sv.slice(0 , i);
   *  const right = sv.slice(-(sv.length-i));
   *
   *  const rightTotal = totalSum[i+1];
   *  const leftTotal = totalSum[0] - rightTotal;
   *
   *  let currentTotal = 0;
   *  if (leftTotal > rightTotal){
   *    currentTotal+=rightTotal;
   *  }else if (rightTotal > leftTotal){
   *    currentTotal+=leftTotal;
   *  }else{
   *    currentTotal+= Math.max(helper(left), helper(right));
   *  }
   *  memo.set(i, currentTotal);
   *  maxTotal = Math.max(maxTotal, currentTotal);
   *  return maxTotal;
   * }
   *
   * helper(stoneValue);
   * return maxTotal;
   *
   */

  return NaN;
};

export default stoneGameV;
