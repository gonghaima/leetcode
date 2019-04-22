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
  let lt = prices.length;
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

  const calcTotal = (ar, tt) => {
    if (ar.length <= 0) return tt;
    const curB = findLowest(ar.slice(0));

    const curD = findHighest(curB.slice(1).slice(0));

    const diff = curD[0] - curB[0];
    if (diff > 0) {
      tt += diff;
    }
    return calcTotal(curD.slice(1), tt);
  };

  const re = calcTotal(curA, total);

  return total;
};
