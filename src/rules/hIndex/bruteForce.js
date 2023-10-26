/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  let i;
  for (i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }
  return i;
};

export default hIndex;
