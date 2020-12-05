
/************************************************************************************************
 * Runtime: 84 ms, faster than 86.15% of JavaScript online submissions for Friend Circles.      *
 * Memory Usage: 41.9 MB, less than 44.05% of JavaScript online submissions for Friend Circles. *
 ************************************************************************************************/

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

export default M => {

  // initialize node list
  const lg = M.length;
  let nodes = {};
  for (let x = 0; x < lg; x += 1) {
    nodes[x] = new Node(x, null);
  }

  // iterate find parent, associate them
  for (let i = 0; i < M.length; i += 1) {
    for (let j = 0; j < M[i].length; j += 1) {
      const val = M[i][j];
      if (val && (i !== j)) {

        const iNode = nodes[i];
        const jNode = nodes[j];

        const iParentNode = findParentNode(iNode);
        const jParentNode = findParentNode(jNode);

        // smaller val node becomes parent of the other
        if (iParentNode.val > jParentNode.val) {
          iParentNode.parent = jParentNode;
        } else if (iParentNode.val < jParentNode.val) {
          jParentNode.parent = iParentNode;
        }
        // else, no worries
      }
    }
  }

  // find all nodes without parent
  let count = 0;
  Object.entries(nodes).map(([key, obj]) => {
    if (!obj.parent) count += 1;
  })


  return count
};

