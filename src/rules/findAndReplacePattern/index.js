const encodeString = paramStr => {
  const wordsCopyArray = paramStr.slice().split('');
  let transformedStr = paramStr.slice();
  let encodedIndex = 1;
  wordsCopyArray.forEach(c => {
    transformedStr = transformedStr.split(c).join(encodedIndex);
    encodedIndex += 1;
  });
  return transformedStr;
};

export default (words, pattern) => {
  //copy of the words
  const wordsCopy = words.slice();

  // convert both into a number
  const transformedWords = words.map(word => {
    return encodeString(word);
  });

  const transformedPattern = encodeString(pattern);

  // compare and return the index of the matched item
  let matchedItem = [];
  transformedWords.map((ele, idx) => {
    if (ele === transformedPattern) matchedItem.push(wordsCopy[idx]);
  });

  // return the filtered data, based on the indexes.

  return matchedItem;
};
