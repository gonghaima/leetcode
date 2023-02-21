/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// take next word from wordDict

// take sub string from s,
// if not match, return false
// else keep going

// return true

// O(n) time complexity, O(1) space complexity
// my solution - test cases passes - not all at submit

var wordBreak = function(s, wordDict) {
  //lib: take next word from wordDict
  let wordDictIdx = 0;
  const takeNextFromwordDict = (wd) => {
    if (wd[wordDictIdx]) {
      const wordToReturn = wd[wordDictIdx];
      wordDictIdx += 1;
      return { currentWord: wordToReturn, len: wordToReturn.length };
    }

    wordDictIdx = 0;
    return { currentWord: wd[0], len: wd[0].length };
  };

  let sIdx = 0;
  while (sIdx < s.length - 1) {
    // take next word from wordDict
    const { currentWord, len } = takeNextFromwordDict(wordDict);
    // take sub string from s,
    const currentSWord = s.slice(sIdx, sIdx + len);

    // if not match, return false
    if (currentWord !== currentSWord) return false;

    // else keep going
    sIdx += len;
  }
  return true;
};
export default wordBreak;
