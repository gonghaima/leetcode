/************************************************************************************************
 * Runtime: 1344 ms, faster than 6.31% of JavaScript online submissions for Accounts Merge.     *
 * Memory Usage: 58.2 MB, less than 24.76% of JavaScript online submissions for Accounts Merge. *
 ************************************************************************************************/

// 1. find all edges  2. union all nodes 3. compress all nodes to parent 4. unique & sort

// performance enhancement consideration:  initial loop, merge to parent if possible
// for each parent, find root, and merge into it.
// unique & sort

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

  // 2. Union find to union all nodes
  const dsu = new DSU(accounts.length);

  edges.forEach(([x, y]) => {
    dsu.union(x, y)
  });

  //2.5 path compression to root
  for (let i = 0; i < dsu.parent.length; i++) {
    dsu.parent[i] = dsu.find(i);
  }

  // 3. For each group, get name, then sort all emails
  const mergeResult = {};
  for (let i = 0; i < dsu.parent.length; i++) {
    const parentIndex = dsu.parent[i];
    mergeResult[parentIndex] = mergeResult[parentIndex] || [];

    const [name, ...emails] = accounts[i];
    let emailsList = emails;
    if (mergeResult[parentIndex].length > 0) {
      const [_, ...existingEmails] = mergeResult[parentIndex];
      emailsList = emailsList.concat(existingEmails);
    }
    mergeResult[parentIndex] = [name, ...emailsList];
  }

  const sortedResult = Object.values(mergeResult).map(record => {
    const [name, ...values] = record;
    const sortedUniqueValue = [...new Set(values)].sort();
    return [name, ...sortedUniqueValue];
  });

  return sortedResult;
};
