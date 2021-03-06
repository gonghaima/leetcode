/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

/******************************************************************************************************
 * Runtime: 120 ms, faster than 51.72 % of JavaScript online submissions for Find the Town Judge.     *
 * Memory Usage: 46.4 MB, less than 74.02 % of JavaScript online submissions for Find the Town Judge. *
 ******************************************************************************************************/

export default (N, trust) => {
  if (N === 1) return 1;
  let output = -1;

  // track if some one trusts others
  const trustOthers = [];

  //track a person's list, whoever trust him/her 
  const tracking = {};


  trust.map(([key, val]) => {
    const k = String(key);
    if (tracking[val]) {
      tracking[val].push(k);
    } else {
      tracking[val] = []
      tracking[val].push(k);
    }
    trustOthers.push(k);
  })


  const trackingKeys = Object.keys(tracking);
  for (let i = 0; (i < trackingKeys.length) && (output === -1); i++) {
    const k = trackingKeys[i];
    const val = tracking[k];
    if ((val.length === (N - 1)) && !trustOthers.includes(k)) {
      output = k;
    }
  }

  return Number(output);
};
