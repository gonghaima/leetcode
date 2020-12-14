/********************************************
 * Runtime: 88 ms, faster than 68.00 %      *
 * Memory Usage: 41.7 MB, less than 36.00 % *
 ********************************************/

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
  for (let x = 0; x < edges.length; x += 1) {
    const [firstVal, secondVal] = edges[x];
    if (!nodes[firstVal]) {
      nodes[firstVal] = new Node(firstVal, null);
    }
    if (!nodes[secondVal]) {
      nodes[secondVal] = new Node(secondVal, null);
    }
  }

  debugger;

  // iterate find parent, associate them
  for (let y = 0; notFound && y < edges.length; y += 1) {
    const [firstVal, secondVal] = edges[y];
    const iNode = nodes[firstVal];
    const jNode = nodes[secondVal];

    const iParentNode = findParentNode(iNode);
    const jParentNode = findParentNode(jNode);

    if (iParentNode.val === jParentNode.val) {
      notFound = false;
      result = edges[y];
    } else {
      jParentNode.parent = iParentNode;
    }

  }

  return result;
};
