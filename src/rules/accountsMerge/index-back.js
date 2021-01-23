const checkCommon = (elementFirst, elementSecond) => {
  const [first, ...restElementFirst] = elementFirst;
  const [second, ...restElementSecond] = elementSecond;
  // if name is not the same, return false
  if (first !== second) return false;

  // loop through find out common email
  let containsCommonEle = false;
  let shorterArr;
  let longerArr;
  if (restElementFirst.length > restElementSecond.length) {
    shorterArr = restElementSecond;
    longerArr = restElementFirst;
  } else {
    shorterArr = restElementFirst;
    longerArr = restElementSecond;
  }

  shorterArr.map(sr => {
    if (longerArr.includes(sr)) {
      containsCommonEle = true;
    }
  });

  return containsCommonEle;
}


export default (accounts) => {
  // 1. Find all edges (having common email address), represent by idex [[0, 3][1,5]] etc.
  const edges = [];
  for (let i = 0; i < accounts.length; i++) {
    const elementFirst = accounts[i];
    for (let j = i + 1; j < accounts.length; j++) {
      const elementSecond = accounts[j];
      const containsCommon = checkCommon(elementFirst, elementSecond);
      if (containsCommon) edges.push([i, j]);
    }
  }

  debugger;

  // 2. Union find to union all nodes
  const parents = {};
  let n = 0;

  const find = (u) => {
    if (parents[u] == null) {
      n++;
      parents[u] = u;
    }
    else if (parents[u] !== u) parents[u] = find(parents[u]); // path compression
    return parents[u];
  };

  const union = (u, v) => {
    const p1 = find(u);
    const p2 = find(v);
    if (p1 !== p2) {
      parents[p1] = p2;
      n--;
    }
  };

  for (const [u, v] of stones) {
    union(u, ~v);
  }
  // 3. For each group, get name, then sort all emails
  return [];
};
