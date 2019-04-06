export default n => {
  let containerArr = [];
  containerArr.push(n - 1);
  containerArr.push(n - 2);
  let counter = 0;
  let carryOn = true;
  while (carryOn) {
    let tempArr = [];
    for (let i = 0; i < containerArr.length; i++) {
      const element = containerArr[i];
      if (element - 1 === 0) {
        counter += 1;
      } else if (element - 2 === 0) {
        counter += 1;
        tempArr.push(element - 1);
      } else {
        tempArr.push(element - 1);
        tempArr.push(element - 2);
      }
    }
    counter += 1;
  }
};

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
