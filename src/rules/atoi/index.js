export default str => {

  const numArr = Array.from(Array(10), (_, i) => String(i));
  const trimedStr = str.trimLeft();
  numArr.push('-');

  console.log(numArr);
  if (!numArr.includes(trimedStr.slice(0, 1))) return 0;

  const numberPattern = /\d+/g;
  const numOnly = trimedStr.match(numberPattern);

  const trimedNum = +((trimedStr[0] === '-') ? '-' + numOnly : numOnly);
  const minResult = trimedNum < -2147483648 ? -2147483648 : trimedNum;
  const maxResult = minResult > 2147483647 ? 2147483647 : minResult;
  return maxResult;
};
