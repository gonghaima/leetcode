/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  words.sort();
  let right = words.reduce((acc, curr) => (acc += curr.length), 0);
  const results = [];
  for (let i = 0; right < s.length + 1; i++, right++) {
    let subString = s
      .substring(i, right)
      .match(new RegExp(`.{1,${words[0].length}}`, 'g'))
      .sort();
    if (JSON.stringify(subString) === JSON.stringify(words)) results.push(i);
  }
  return results;
};

export default findSubstring;
