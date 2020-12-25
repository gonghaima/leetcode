/*****************************************************************************************************************************
 * Runtime: 5784 ms, faster than 5.75% of JavaScript online submissions for Most Stones Removed with Same Row or Column.     *
 * Memory Usage: 55.3 MB, less than 20.69% of JavaScript online submissions for Most Stones Removed with Same Row or Column. *
 *****************************************************************************************************************************/

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
  let edges = [];
  for (let x = 0; x < stones.length; x += 1) {
    const [firstVal, secondVal] = stones[x];
    nodes[stones[x]] = new Node(stones[x], null);
  }

  // add shallow relations, initiate edges
  const nodeList = Object.entries(nodes);

  for (let idx = 0; idx < nodeList.length; idx++) {
    const [ref, nd] = nodeList[idx];
    const [x, y] = ref.split(',')
    for (let ix = idx + 1; ix < nodeList.length; ix++) {
      const [ref1, nd1] = nodeList[ix];
      const [a, b] = ref1.split(',')
      if (a === x) {
        if (b < y) {
          nd.parent = nd1;
          edges.push([ref1, ref]);
        } else {
          nd1.parent = nd;
          edges.push([ref, ref1]);
        }
      }
      if (b === y) {
        if (a < x) {
          nd.parent = nd1;
          edges.push([ref1, ref])
        } else {
          nd1.parent = nd;
          edges.push([ref, ref1]);
        }
      }
    }
  }

  // iterate edges to find parent, associate them
  for (let j = 0; j < edges.length; j++) {
    const [ref, ref1] = edges[j];
    const nodeRef = nodes[ref];
    const nodeRef1 = nodes[ref1];


    const nodeRefParent = findParentNode(nodeRef);
    const nodeRefParent1 = findParentNode(nodeRef1);
    if (nodeRefParent.val > nodeRefParent1.val) {
      nodeRefParent.parent = nodeRefParent1;
    } else if (nodeRefParent.val < nodeRefParent1.val) {
      nodeRefParent1.parent = nodeRefParent;
    }

  }


  // find root nodes without parent
  let cnt = 0;
  nodeList.map(([_, nd]) => {
    if (!nd.parent) {
      cnt += 1;
    }
  })

  // total nodes number substract root nodes
  const result = nodeList.length - cnt;

  return result;
};
