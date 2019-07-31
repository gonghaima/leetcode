export default A => {
  const collectionOfArithmeticArray = [...A].reduce(
    (i, currentItem, currentIndex, arr) => {
      // Because the first and second item added initially, the index 1 will be ignored
      if (i.skipCurrent === true) {
        i.skipCurrent = false;
        return i;
      }

      //initial difference value setup
      if (i.difference === null) {
        i.difference = arr[currentIndex + 1] - currentItem;
        i.result[i.currentResultIndex] = [];
        i.result[i.currentResultIndex].push(currentItem);
        i.result[i.currentResultIndex].push(arr[currentIndex + 1]);
        i.skipCurrent = true;
        return i;
      }

      const diff = currentItem - arr[currentIndex - 1];

      //diff equal to difference
      if (diff === i.difference) {
        i.result[i.currentResultIndex].push(currentItem);
        return i;
      }

      //diff not equal to difference
      if (diff !== i.difference) {
        //if length is greater than 2, keep result, increase result array index
        if (i.result[i.currentResultIndex].length > 2) {
          i.currentResultIndex = i.currentResultIndex + 1;
          i.difference = diff;
          i.result[i.currentResultIndex] = [];
          i.result[i.currentResultIndex].push(currentItem);
          i.result[i.currentResultIndex].push(arr[currentIndex + 1]);
          i.difference = arr[currentIndex + 1] - currentItem;
          i.skipCurrent = true;
          return i;
        }

        // if length is not greater than 2, reset current result, adding again.
        if (arr[currentIndex + 1]) {
          i.difference = diff;
          i.result[i.currentResultIndex] = [];
          i.result[i.currentResultIndex].push(currentItem);
          i.result[i.currentResultIndex].push(arr[currentIndex + 1]);
          i.difference = arr[currentIndex + 1] - currentItem;
          i.skipCurrent = true;
          return i;
        }
        return i;
      }
    },
    {
      difference: null,
      currentResultIndex: 0,
      skipCurrent: false,
      result: []
    }
  );

  const aLength = A.length;
  let num =
    collectionOfArithmeticArray.result.length <= 0
      ? 0
      : collectionOfArithmeticArray.result.reduce((i, c) => {
          if (c.length === 3) {
            i += 1;
            return i;
          }
          for (let k = 3; k <= c.length; k++) {
            i += c.length - k + 1;
          }
          return i;
        }, 0);
  return num;
};

