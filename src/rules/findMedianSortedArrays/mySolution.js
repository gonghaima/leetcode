/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let isEvenNumber = true;
  let position, positionL, positionR;
  // find out the position for odd number
  // find out the position for even number
  const totalLen = nums1.length + nums2.length;
  if (totalLen % 2 === 0) {
    positionL = Math.floor(totalLen / 2) - 1;
    positionR = Math.floor(totalLen / 2);
  } else {
    isEvenNumber = false;
    position = Math.floor(totalLen / 2);
  }

  //two pointers to merge the two array
  // find out the numbers looking for
  // work out the result
  let answersFound = false,
    answer = null;
  let pointerL = 0,
    pointerR = 0;

  const mergedNums = [];
  while (
    answersFound === false &&
    (pointerL < nums1.length || pointerR < nums2.length)
  ) {
    if (position && mergedNums[position]) {
      answersFound = true;
      answer = mergedNums[position];
    } else if (mergedNums[positionL] && mergedNums[positionR]) {
      answersFound = true;
      answer = (mergedNums[positionL] + mergedNums[positionR]) / 2;
    }

    if (pointerL === nums1.length && pointerR < nums2.length) {
      mergedNums.push(nums2[pointerR]);
      pointerR++;
      continue;
    }
    if (pointerR === nums2.length && pointerL < nums1.length) {
      mergedNums.push(nums1[pointerL]);
      pointerL++;
      continue;
    }
    const val1 = nums1[pointerL];
    const val2 = nums2[pointerR];
    if (val1 > val2) {
      mergedNums.push(nums2[pointerR]);
      pointerR++;
    } else {
      mergedNums.push(nums1[pointerL]);
      pointerL++;
    }
  }
  return answer;
};

export default findMedianSortedArrays;
