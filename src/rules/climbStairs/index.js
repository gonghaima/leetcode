function TreeNode(val) {
  this.val = val;
  this.left = this.right = null; // eslint-disable-line
}
// export default n => {
//   let containerArr = [];
//   containerArr.push(n - 1);
//   containerArr.push(n - 2);
//   let counter = 0;

//   while (containerArr.length > 0) {
//     let tempArr = [];
//     for (let i = 0; i < containerArr.length; i++) {
//       const element = containerArr[i];
//       if (element - 1 === 0) {
//         counter += 1;
//       } else if (element - 2 === 0) {
//         counter += 1;
//         tempArr.push(element - 1);
//       } else {
//         tempArr.push(element - 1);
//         tempArr.push(element - 2);
//       }
//       containerArr = tempArr;
//     }
//   }
//   return counter;

// while (containerArr.length > 0) {
//   let tempArr = [];
//   for (let i = 0; i < containerArr.length; i++) {
//     const element = containerArr[i];
//     if (element - 1 === 0) {
//       counter += 1;
//     } else if (element - 2 === 0) {
//       counter += 1;
//       tempArr.push(element - 1);
//     } else {
//       tempArr.push(element - 1);
//       tempArr.push(element - 2);
//     }
//     containerArr = tempArr;
//   }
// }
// return counter;
// };

// export default n => {
//   let counter = 0;
//   const keepCal = nm => {
//     if (nm === 0) {
//       counter += 1;
//       return 0;
//     } else if (nm <= 0) {
//       return 0;
//     }
//     while (nm >= 0) {
//       return keepCal(nm - 2) + keepCal(nm - 1);
//     }
//   };

//   keepCal(n);
//   return counter;
// };

export default n => {
  let counter = 0;
  const keepCal = nm => {
    if (nm === 0) {
      counter += 1;
      return 0;
    } else if (nm <= 0) {
      return 0;
    }

    return keepCal(nm - 2) + keepCal(nm - 1);
  };

  keepCal(n);
  return counter;
};
