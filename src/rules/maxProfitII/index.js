/** the idea behind is that
 * find the lowest price from the start point, then slice it to there.
 * then, find the lowest price from start point, then slice it to there.
 * calculate diff between high and low, add to total if greater than 0
 *
 * keep the above operation until no items in array
 */
export default prices => {
  let curA = prices.slice();
  let total = 0;
  // a = array,  p - position
  const findLowest = a => {
    if (a[0] >= a[1]) {
      return findLowest(a.slice(1));
    } else {
      return a;
    }
  };

  const findHighest = a => {
    if (a[0] <= a[1]) {
      return findHighest(a.slice(1));
    } else {
      return a;
    }
  };

  while (curA.length > 0) {
    curA = findLowest(curA);
    const alVal = curA[0];

    curA = curA.slice(1);
    curA = findHighest(curA);
    const ahval = curA[0];

    const diff = ahval - alVal;
    if (diff > 0) {
      total += diff;
    }
    curA = curA.slice(1);
  }

  return total;
};
