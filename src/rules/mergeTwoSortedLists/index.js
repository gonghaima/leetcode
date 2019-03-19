export const mergeTwoLists = (l1, l2) => {
  let pointer1Current = 0;
  let pointer1End = l1.length;

  let pointer2Current = 0;
  let pointer2End = l2.length;

  let mergedArray = [];
  while (pointer1Current < pointer1End || pointer2Current < pointer2End) {
    if (
      !l1[pointer1Current] &&
      l1[pointer1Current] !== 0 &&
      l2[pointer2Current]
    ) {
      mergedArray.push(l2[pointer2Current]);
      pointer2Current += 1;
    }

    if (
      !l2[pointer2Current] &&
      l2[pointer2Current] !== 0 &&
      l1[pointer1Current]
    ) {
      mergedArray.push(l1[pointer1Current]);
      pointer1Current += 1;
    }

    if (l1[pointer1Current] > l2[pointer2Current] && l2[pointer2Current]) {
      mergedArray.push(l2[pointer2Current]);
      pointer2Current += 1;
    } else if(l1[pointer1Current]){
      mergedArray.push(l1[pointer1Current]);
      pointer1Current += 1;
    }
  }

  return mergedArray;
};
