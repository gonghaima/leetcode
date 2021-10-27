/**
 * bfs
 *
 * Initiate step 0, found = false, n = arr.length-1
 *
 * start with first index [0], keep find & add the following indexes
 * step ++
 *
 * i-1  (if i-1 ===n , found true)
 * i+1 (if i+1 ===n , found true)
 * indexes j where arr[i] === arr [j]     (if j ===n , found true)
 *
 * add to the next interation
 *
 *
 * return found?step:false;
 */

 var minJumps = function (arr) {
    let step = 0, found = false, n = arr.length - 1, next = [0], aggregatedValue = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!aggregatedValue[element]) aggregatedValue[element] = [i]
      else aggregatedValue[element].push(i);
    }
    const validIdx = idx => idx >= 0 && idx <= n;
    while (next.length && !found) {
      step++;
      let tmp = [];
      for (let i = 0; i < next.length; i++) {
        if (validIdx(i - 1)) {
          tmp.push(i - 1);
          if (i - 1 === n) found = true;
        };
  
        if (validIdx(i + 1)) {
          tmp.push(i + 1);
          if (i + 1 === n) found = true;
        };
  
        if (aggregatedValue[arr[i]] && aggregatedValue[arr[i]].length > 1) {
          const aliasElements = aggregatedValue[arr[i]];
          for (let j = 0; j < aliasElements.length; j++) {
            const aliasElement = aliasElements[j];
            if (i !== aliasElement) {
              tmp.push(j);
              if (j === n) found = true;
            }
          }
        };
      };
      next = tmp;
    }
    return found ? step : false;
  };
  
  export default minJumps;