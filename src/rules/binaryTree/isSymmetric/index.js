var isSymmetric = function (root) {
  //     if there is no root that means it is a symettric tree
  if (!root) return true;
  //     Start 2 queue one for the left banch and one for the right branch
  let q1 = [root.left],
    q2 = [root.right];
  //     traverse through both branches, until they are both exhausted at the same time
  while (q1.length > 0 && q2.length > 0) {
    //         get current left and compare it to the right of each branch (this is how a mirror works)
    let node1 = q1.shift();
    let node2 = q2.shift();
    //         if both are null at the same time, just move on
    if (!node1 && !node2) continue;
    //         if the current level is not symmetric (1 of them is null or they are not equal) return false
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    //         to mentain comparing left to right (this is the tricky part, you have to push left and right & reverse for each branch)
    q1.push(node1.left);
    q2.push(node2.right);
    q1.push(node1.right);
    q2.push(node2.left);
  }
  //     If both are exhausted at the same time and they are symmeteric return true
  return true;
};

export { isSymmetric };
