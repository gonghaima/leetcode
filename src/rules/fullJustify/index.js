/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let curWords = [];
  let curLen = 0;

  for (let word of words) {
    if (curLen + word.length + curWords.length > maxWidth) {
      let totalSpaces = maxWidth - curLen;
      let gaps = curWords.length - 1;
      if (gaps === 0) {
        res.push(curWords[0] + ' '.repeat(totalSpaces));
      } else {
        let spacePerGap = Math.floor(totalSpaces / gaps);
        let extraSpaces = totalSpaces % gaps;
        let line = '';
        for (let i = 0; i < curWords.length; i++) {
          line += curWords[i];
          if (i < gaps) {
            line += ' '.repeat(spacePerGap);
            if (i < extraSpaces) {
              line += ' ';
            }
          }
        }
        res.push(line);
      }
      curWords = [];
      curLen = 0;
    }
    curWords.push(word);
    curLen += word.length;
  }

  let lastLine = curWords.join(' ');
  while (lastLine.length < maxWidth) {
    lastLine += ' ';
  }
  res.push(lastLine);

  return res;
};

export default fullJustify;
