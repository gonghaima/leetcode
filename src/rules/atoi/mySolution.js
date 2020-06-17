export default str => {

  if (str === "-") return 0;
  if (str === "+") return 0;

  const s = str.slice(0, 1);
  const st = str.slice(0, 2);
  if (st === "+-" || st === "-+") return 0;

  if (str === "+-") return 0;
  const numArr = Array.from(Array(10), (_, i) => String(i));
  const trimedStr = str.trimLeft();
  numArr.push('-');
  numArr.push('+');

  if (!numArr.includes(trimedStr.slice(0, 1))) return 0;

  let numOn = "";

  const trimedStrArr = trimedStr.split("");
  for (let idx = 0; idx < trimedStrArr.length; idx++) {
    const element = trimedStrArr[idx];
    if (numArr.includes(element)) {
      numOn += element;
    } else {
      break;
    }
  }
  console.log("numOn: " + numOn);

  if (numOn === "-" || numOn === "+" || numOn === "+-" || numOn === "-+") return 0;
  // const trimedNum = +((trimedStrArr[0] === '-') ? '-' + numOn : numOn);
  const trimedNum = + numOn;
  console.log("trimedStrArr: " + trimedStrArr);
  console.log("trimedStr: " + trimedStr);
  console.log("trimedNum: " + trimedNum);
  const minResult = trimedNum < -2147483648 ? -2147483648 : trimedNum;
  const maxResult = minResult > 2147483647 ? 2147483647 : minResult;

  return isNaN(maxResult) ? 0 : maxResult;
};
