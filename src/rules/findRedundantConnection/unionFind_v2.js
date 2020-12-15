/*******************************************
 * Runtime: 80 ms, faster than 94.83%      *
 * Memory Usage: 41.9 MB, less than 34.48% *
 *******************************************/
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

export default edges => {
  let result = [];
  let notFound = true;

  // initialize node list
  let nodes = {};
  for (let x = 0; notFound && x < edges.length; x += 1) {
    const [firstVal, secondVal] = edges[x];

    // initialize node if not found
    if (!nodes[firstVal]) {
      nodes[firstVal] = new Node(firstVal, null);
    }
    if (!nodes[secondVal]) {
      nodes[secondVal] = new Node(secondVal, null);
    }

    // find parent of each node
    const iParentNode = findParentNode(nodes[firstVal]);
    const jParentNode = findParentNode(nodes[secondVal]);

    // if same parent, record the edge
    if (iParentNode.val === jParentNode.val) {
      result = edges[x];
      notFound = false;
    }
    //associate them
    if (jParentNode.val > iParentNode.val) {
      jParentNode.parent = iParentNode;
    } else {
      iParentNode.parent = jParentNode;
    }
  }

  return result;
};
