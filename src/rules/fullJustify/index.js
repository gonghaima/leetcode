/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let cur = [];
  let num_of_letters = 0;

  for (let word of words) {
    if (word.length + cur.length + num_of_letters > maxWidth) {
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        cur[i % (cur.length - 1 || 1)] += ' ';
      }
      res.push(cur.join(''));
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }

  let lastLine = cur.join(' ');
  while (lastLine.length < maxWidth) lastLine += ' ';
  res.push(lastLine);

  return res;
};

export default fullJustify;
