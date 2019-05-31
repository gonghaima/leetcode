export default people => {
  let resultArr = new Array(people.length);

  let currentData = { minItem: {}, remaining: people };

  const retrieveMin = arr =>
    arr.reduce((acc, [h, k], idx, src) => {
      if (!acc) return { minItem: { ix: idx, item: [h, k] }, remaining: [] };
      if (acc.minItem.item[0] > h) {
        acc.remaining.push(acc.minItem.item);
        acc.minItem = { ix: idx, item: [h, k] };
        return acc;
      } else {
        acc.remaining.push([h, k]);
        return acc;
      }
    }, null);

  while (currentData.remaining.length > 0) {
    const tmp = retrieveMin(currentData.remaining);
    let counter = 0;
    let actualIdx = 0;

    //find the postion
    while (actualIdx < tmp.minItem.item[1]) {
      if (
        !resultArr[counter] ||
        (resultArr[counter] && resultArr[counter][0] === tmp.minItem.item[0])
      ) {
        counter += 1;
        actualIdx += 1;
      } else {
        counter += 1;
      }
    }

    //skip defined position
    while (resultArr[counter]) {
      counter += 1;
    }
    resultArr[counter] = tmp.minItem.item;
    currentData = tmp;
  }

  return resultArr;
};
