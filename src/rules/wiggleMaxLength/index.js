// function* subsets(array, offset = 0) {
//   while (offset < array.length) {
//     let first = array[offset++];
//     for (let subset of subsets(array, offset)) {
//       subset.push(first);
//       yield subset;
//     }
//   }
//   yield [];
// }
const getAllSubsets = theArray =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );

export const isWiggle = curArr => {
  let isW = true;
  let curIdx = 0;
  const isGreaterThanZero = a => a > 0;
  let expectedState = null;
  let end = false;
  while (isW && !end && (curArr[curIdx] || curArr[curIdx] === 0)) {
    // exit when comes to the last item
    if (curIdx === curArr.length - 1) {
      end = true;
      continue;
    }
    // the first time
    const actual = isGreaterThanZero(curArr[curIdx] - curArr[curIdx + 1]);
    if (expectedState === null) {
      expectedState = !actual;
      curIdx += 1;
      continue;
    }

    if (actual === expectedState) {
      expectedState = !expectedState;
    } else {
      isW = false;
    }
    curIdx += 1;
  }
  return isW;
};

export default nums => {
  let result = [];
  // for (let subset of subsets(nums)) {
  //   if (isWiggle(subset)) result.push(subset.length);
  // }

  const subsets = getAllSubsets(nums);
  for (let subset of subsets) {
    if (isWiggle(subset)) result.push(subset.length);
  }

  const longestWiggle = Math.max(...result);
  return longestWiggle;
};
