export default s => {
  let leadingSpace = true;
  if (!s.length || s.length === 0) return 0;
  if (s !== " " && s.length === 1) return 1;
  let resultArr = [];
  const totalLength = s.length;
  for (let i = totalLength; i >= 0; i--) {
    const curChar = s.substring(i, i - 1);
    if (curChar === " " && leadingSpace === true) continue;
    if (curChar !== " " && curChar !== "") {
      resultArr.push(curChar);
      leadingSpace = false;
    } else {
      break;
    }
  }
  return resultArr.length;
};
