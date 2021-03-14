/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// not working in case 5, because it reached to the end but picked not the shortest time

//bfs
var networkDelayTime = function (times, n, k) {

  //build a graph edge list
  //a map -  k(source node), value [high, [list of nodes]]
  let graph = {};
  times.map(([u, v, w]) => {
    if (u in graph) {
      graph[u]['nodes'].push(v);
      if (graph[u]['high']) {
        graph[u]['high'] = graph[u]['high'] > w ? graph[u]['high'] : w;
      } else {
        graph[u]['high'] = w;
      }
    } else {
      graph[u] = {};
      graph[u]['nodes'] = [v];
      graph[u]['high'] = w;
    }
  });

  // next array [], add k as start, max=0, visited=set
  let next = [k];
  let max = 0;
  let visited = new Set();
  visited.add(k);

  debugger;
  // while next
  while (next.length) {
    // let higher, tempNext=[]
    let higher = 0, tempNext = [];
    debugger;
    let include = true;
    next.map(node => {
      // foreach node, if not visited 
      // if (!visited.has(node)) {
      //   // //compare higher & high, get/assign higher
      //   // higher = higher > high ? higher : high;
      //   // add to visited, add to tempNex
      //   visited.add(node);
      //   tempNext.push(node);
      // }
      if (!visited.has(node)) visited.add(node);
      // if (visited.size === n) include = false;
      if (graph[node]) {
        //compare higher & high, get/assign higher
        higher = higher > graph[node]['high'] ? higher : graph[node]['high'];
        graph[node]['nodes'].map(nd => {
          if (!visited.has(nd)) {
            visited.add(nd);
            tempNext.push(nd);
          }
        })
      }
    });
    // max+=higher
    // assign tempNext to next
    max += higher;
    if (visited.size === n) {
      next = [];
    } else {
      debugger;
      next = tempNext;
    }
  }

  // if visited length same as n, return max
  // otherwise return -1;
  if (visited.size === n) return max;
  else return -1;
  // return null;
};

export default networkDelayTime;
