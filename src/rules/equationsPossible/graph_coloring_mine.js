/**********************************************************************************************************************
 * Runtime: 92 ms, faster than 75.00% of JavaScript online submissions for Satisfiability of Equality Equations.      *
 * Memory Usage: 44.4 MB, less than 14.29% of JavaScript online submissions for Satisfiability of Equality Equations. *
 **********************************************************************************************************************/

//1. loop all connected - find assign color values to each node, then keep track of a list of nodes under each colour
//2. loop all disconnected - verify colour value, if value is the same, it means the equation is not possible

export default (equations) => {
  // initiate values - color , group
  let possible = true;

  let currentColor = 1;
  //each colour contains an array of node
  let colorContainer = {};

  //each node has the value of colour 
  let item = {};

  // coloring based connections
  for (let i = 0; i < equations.length; i++) {
    const [a, s, , b] = equations[i];
    if (s === "!") continue;

    if (!item[a] && !item[b]) {
      // item:color update
      item[a] = currentColor;
      item[b] = currentColor;
      colorContainer[currentColor] = [];

      //color container update
      colorContainer[currentColor].push(a);
      colorContainer[currentColor].push(b);
      currentColor += 1;
    } else if (
      (item[a] && item[b]) &&
      (item[a] !== item[b])
    ) {
      // item:color update
      colorContainer[item[a]] = colorContainer[item[a]] || [];
      colorContainer[item[a]].map(child => {
        item[child] = item[b];
      })

      //color container update
      colorContainer[item[b]] = colorContainer[item[b]] || [];
      colorContainer[item[b]] = colorContainer[item[b]].concat(colorContainer[item[a]]);
      delete colorContainer[item[a]];

    } else if (item[a]) {
      // item:color update
      item[b] = item[a];
      //color container update
      colorContainer[item[a]] = colorContainer[item[a]] || [];
      colorContainer[item[a]].push(b);
    } else {
      // item:color update
      item[a] = item[b];
      //color container update
      colorContainer[item[b]] = colorContainer[item[b]] || [];
      colorContainer[item[b]].push(a);
    }

  }

  // check based on disconnection, if both has the same color, return false
  for (let i = 0; (i < equations.length) && possible; i++) {
    const [a, s, , b] = equations[i];
    if (s === "!") {
      if (
        (item[a] === item[b])
        && (item[a] !== undefined && item[b] !== undefined)
      ) possible = false;

      if (a === b) possible = false;

    }
  }

  return possible;
};
