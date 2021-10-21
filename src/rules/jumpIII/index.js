/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// union find

var canReach = function (arr, start) {
  // index with value 0
  let end = null;


  // build graph
  const graph = {};
  for (let i = 0; i < arr.length; i++) {
    const itemValue = arr[i];

    // set end index
    if (itemValue === 0) {
      end = i;
      continue;
    }

    const prevIndex = i - itemValue >= 0 ? i - itemValue : null;
    const nextIndex = (i + itemValue) <= (arr.length - 1) ? (i + itemValue) : null;
    if (!graph[i] && graph[i] !== 0) {
      graph[i] = [];
    }

    if (i === 5);
    if (prevIndex) graph[i].push(prevIndex);
    if (nextIndex) graph[i].push(nextIndex);
  }
  // path compression

  // find the ancestor of the start
  // bfs - find all parents & including ancestors - if index is end index
  ;
  let reachable = false;

  let visited = new Set();
  let next = [start];
  ;

  while (next.length && !reachable) {
    ;
    let tmp = [];
    for (let i = 0; i < next.length; i++) {
      const parentIdx = next[i];
      const parents = graph[parentIdx];
      const parentsSet = new Set(parents);

      if (parentsSet.has(end)) reachable = true;
      parents.map(parent => {
        if (!visited.has(parent)) {
          tmp.push(parent);
          visited.add(parent);
        }
      })
    };
    next = tmp;;
  };

  return reachable;
};

export default canReach;