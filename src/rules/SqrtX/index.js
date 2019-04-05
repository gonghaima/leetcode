export default x => {
  if (x === 0) return 0;
  if (x === 1) return 1;

  let result;
  let startPoint = 0;
  let middlePoint = Math.ceil(x / 2);
  let endPoint = x;

  while (!result) {
    let curVal = middlePoint * middlePoint;
    if (curVal > x) {
      endPoint = middlePoint;
      middlePoint = Math.ceil(startPoint + (endPoint - startPoint) / 2);
    } else if (curVal === x) {
      result = middlePoint;
    } else {
      startPoint = middlePoint;
      middlePoint = Math.ceil(startPoint + (endPoint - startPoint) / 2);
    }

    if (endPoint - startPoint === 1) result = startPoint;
  }
  return result;
};
``;
