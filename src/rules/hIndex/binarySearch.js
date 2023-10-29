/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let a = 0;
  let b = citations.length - 1;
  citations.sort((a, b) => b - a);
  while (a <= b) {
    let mid = a + Math.floor((b - a) / 2);
    if (citations[mid] > mid) a = mid + 1;
    else b = mid - 1;
  }
  return a;
};

export default hIndex;
