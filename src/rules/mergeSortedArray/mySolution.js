export default (nums1, m, nums2, n) => {
  let result = [];
  const n1 = nums1.slice(0, m);
  const n1L = n1.length;

  const n2 = nums2.slice(0, n);
  const n2L = n2.length;

  let longerNum;
  let longerNumLength;

  let shorterNum;

  if (n1L > n2L) {
    longerNum = n1;
    longerNumLength = n1L;
    shorterNum = n2;
  } else {
    longerNum = n2;
    longerNumLength = n2L;
    shorterNum = n1;
  }

  let index1 = 0;
  let index2 = 0;

  while (index1 <= longerNumLength) {
    const temp1 = longerNum[index1];
    const temp2 = shorterNum[index2];

    if ((temp1 || temp1 === 0) && (temp2 || temp2 === 0)) {
      if (temp1 < temp2) {
        result.push(temp1);
        index1 += 1;
        continue;
      } else {
        result.push(temp2);
        index2 += 1;
        continue;
      }
    }

    if (temp1 || temp1 === 0) result.push(temp1);
    index1 += 1;
  }
  return result;
};
