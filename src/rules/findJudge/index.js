/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

export default (N, trust) => {
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
