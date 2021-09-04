/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */



var maxSumAfterPartitioning = function (arr, k) {
  let newArr = arr.slice().sort((a, b) => a - b);
  let totalLength = arr.length;
  let total = 0;
  let res = [];
  console.log(newArr);
  const count = Math.floor(totalLength / k);
  console.log(`count:${count}`);
  if (totalLength % k === 0) {
    console.log(`k:${k}`);
    for (let i = 0; i < count; i++) {

      total += b * k;
    }
  } else {
    for (let i = 0; i < count; i++) {
      const b = newArr.pop();
      console.log(`b:${b}`);
      console.log(b * k);
      total += b * k;
    };
    debugger
    const remains = totalLength - count * k;
    console.log(`remains:${remains}`);
    const n = newArr.pop();
    console.log(`n: ${n}`);
    console.log(`total: ${total}`);
    total += n * remains;
  };
  return total;

  while (counter > 0) {
    if (counter - k >= 0) {
      const t = newArr.pop();
      total += t * k;
      counter -= k;
      for (let i = 0; i < k; i++) {
        res.push(t);
      }
    } else {
      const t = newArr.pop();
      total += t * (k - counter - 1);
      for (let i = 0; i < (k - counter - 1); i++) {
        res.push(t);
      }
      counter = 0;
    }
  };
  console.log(res);
  return total;
};

export default maxSumAfterPartitioning;