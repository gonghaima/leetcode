// union find

// util node builder
class Node {
  constructor(val, parent) {
    this.val = val;
    this.parent = parent;
  }
}

// util findParent
const findParentNode = (nd) => {
  if (nd && nd.parent) {
    return findParentNode(nd.parent);
  } else {
    return nd;
  }
}

export default stones => {
  // initialize node list
  let nodes = {};
  for (let x = 0; x < stones.length; x += 1) {
    const [firstVal, secondVal] = stones[x];
    nodes[stones[x]] = new Node(stones[x], null);
  }

  // add relations initiate edges
  const nodeList = Object.entries(nodes);

  for (let idx = 0; idx < nodeList.length; idx++) {
    const [ref, nd] = nodeList[idx];
    const [x, y] = ref.split(',')
    for (let ix = idx + 1; (ix < nodeList.length) && nodeList.length > (idx + 1); ix++) {
      const [ref1, nd1] = nodeList[ix];
      const [a, b] = ref1.split(',')
      if (a === x) {
        if (b < y) {
          nd.parent = nd1;
        } else {
          nd1.parent = nd;
        }
      }
      if (b === y) {
        if (a < x) {
          nd.parent = nd1;
        } else {
          nd1.parent = nd;
        }
      }
    }
  }
  //debugger;
  //nodeList.length - 
  // find nodes without parent
  let cnt = 0;
  nodeList.map(([_, nd]) => {
    if (!nd.parent) cnt += 1;
  })

  // total nodes number substract root nodes
  const result = nodeList.length - cnt;

  return result;
};
