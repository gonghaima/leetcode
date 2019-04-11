export default root => {
  if (root === null) return true;

  let balanced = true;
  let currentNodeList = [];
  currentNodeList.push(root);

  let left = root.left;
  let right = root.right;

  let leftCount = 0;
  let rightCount = 0;

  while (currentNodeList.length > 0 || balanced) {
    currentNodeList.map(cn => {
      let cB = true;
      let lc = 0;
      let lArr = [];

      let rc = 0;
      let rArr = [];

      let cA = [];
      cA.push(cn);
      while (cB && cA.length > 0) {
        if (cA.left) {
          lc += 1;
          lArr.push(cA.left);
          while (cB && lArr.length > 0) {
            lArr.forEach(element => {
              if (element.left || element.right) {
                lc += 1;
                if (element.left) lArr.push(element.left);
                if (element.right) lArr.push(element.right);
              }
            });

            rArr.forEach(element => {
              if (element.left || element.right) {
                rc += 1;
                if (element.left) rArr.push(element.left);
                if (element.right) rArr.push(element.right);
              }
            });

            const diff = lc - rc;
            if (diff < -1 || diff > 1) {
              cB = false;
              balanced = false;
            }
          }
        }

        if (cA.right) {
          lc += 1;
          lArr.push(cA.left);
          while (cB && lArr.length > 0) {
            lArr.forEach(element => {
              if (element.left || element.right) {
                lc += 1;
                if (element.left) lArr.push(element.left);
                if (element.right) lArr.push(element.right);
              }
            });

            rArr.forEach(element => {
              if (element.left || element.right) {
                rc += 1;
                if (element.left) rArr.push(element.left);
                if (element.right) rArr.push(element.right);
              }
            });

            const diff = lc - rc;
            if (diff < -1 || diff > 1) {
              cB = false;
              balanced = false;
            }
          }
        }
      }
    });
  }
  return null;
};
