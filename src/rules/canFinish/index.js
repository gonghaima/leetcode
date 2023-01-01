/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

  // convert to a map
  // const graph = new Map();
  const graph = {};
  prerequisites.map(([cur, pre]) => {
    // graph.set(cur, pre);
    graph[cur] = (graph[cur] || []);
    graph[cur].push(pre);
  })


  // add an external tracker
  const visited = new Set();

  let canF = true;

  prerequisites.map(([cur, pre]) => {
    if (!visited.has(cur)) {
      let next = [];
      const tempVisited = new Set();
      next.push(cur);
      tempVisited.add(cur);
      let noneSkip = true;
      // while iteration
      while (next.length && noneSkip) {
        // for each iter array item
        const nextItr = [];
        const currentCourse = next.pop();
        next.map(currentCourse => {
          const preReqs = graph[currentCourse];
          // reached to end, add it to visited
          if (preReqs === undefined) {
            visited.add(currentCourse);
          } else {
            preReqs && preReqs.map(preReq => {
              // if in tempVisited, return false;
              if (tempVisited.has(preReq)) {
                canF = false;
                noneSkip = false;
              }// if already visited, skip it
              else if (visited.has(preReq)) {
                noneSkip = false;
              } else { // add it to next iteration
                tempVisited.add(currentCourse);
                nextItr.push(preReq);
              }
            });
          }
        })
        next = nextItr;
      };
      // asign tempVisited to next iteration
      for (let tempVist of tempVisited) {
        visited.add(tempVist);
      }
    }
  });

  return canF;
};

export default canFinish;
