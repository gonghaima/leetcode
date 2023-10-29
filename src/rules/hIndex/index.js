/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (citations[i] > i) i++;

  return i;
};

export default hIndex;
