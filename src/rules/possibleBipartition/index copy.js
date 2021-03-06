
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var possibleBipartition = function (N, dislikes) {
  // build an adjancency list
  let adjList = {};
  let colorTrack = {};
  let possible = true;
  dislikes.map(([a, b]) => {
    adjList[a] = adjList[a] || [];
    adjList[a].push(b);
    adjList[b] = adjList[b] || [];
    adjList[b].push(a);
    // initial a hash key is id, value is color
    colorTrack[a] = null;
    colorTrack[b] = null;
  })

  // loop through each list, color them, 
  let currentColor = 1;
  let nextColor = 2;
  Object.entries(([key, vals]) => {

  });
  let keys = Object.keys(adjList);

  for (let i = 0; possible && i < keys.length; i++) {
    const key = keys[i];
    const currentDislikes = adjList[key];

    if (!colorTrack[key]) colorTrack[key] = currentColor;

    for (let j = 0; possible && j < currentDislikes.length; j++) {
      const person = currentDislikes[j];
      const next = [];
      // if there is a found color different from expected, return false
      if (colorTrack[person] && colorTrack[person] !== nextColor) {
        possible = false;
      }
      if (!colorTrack[person]) {
        colorTrack[person] = nextColor;
      };
      next.push(person);

      while(next.length){
        next.map(p=>{
          
        })
      }

    }

  }



  return possible;
}

export default possibleBipartition;
