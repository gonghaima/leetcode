/** track down all values in a linked list, until to the end */
const findNext = (linkedList, resultArray) => {
  resultArray.push(linkedList.val);
  if (linkedList.next) {
    return findNext(linkedList.next, resultArray);
  }
  return resultArray;
};

/** sort arr by length - desc */
const sortByLength = (arr1, arr2) =>
  arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];

const addTwoNumbers = (singlyLinkedListParam1, singlyLinkedListParam2) => {
  const combinedArr = [];

  /** get all linked list value */
  const param1ArrayResult = findNext(singlyLinkedListParam1, []);
  const param2ArrayResult = findNext(singlyLinkedListParam2, []);

  /** Swap the make sure param1Result is the longer one */
  const sortedResultArr = sortByLength(param1ArrayResult, param2ArrayResult);

  let next = 0;
  for (let i = 0; i < sortedResultArr[0].length; i += 1) {
    const element1 = sortedResultArr[0][i];
    /** if there is an item in the shorter array, matching the position in longer array, add two items and next together */
    if (sortedResultArr[1][i]) {
      const total = element1 + sortedResultArr[1][i] + next;
      const totalArr = total.toString().split('');
      /** if result length is greater than 1 digit, it means the total is at least 10 */
      if (totalArr.length > 1) {
        /** in this case, take first digit, save to "next" variable, next time will be added together
         * take the second digit, push to result array
         */
        next = parseInt(totalArr[0], 10);
        combinedArr.push(parseInt(totalArr[1], 10));
      } else {
        /** if result length is not greater than 1, push to result array, reset next to 0 */
        combinedArr.push(parseInt(totalArr[0], 10));
        next = 0;
      }
      /** if there is no item in the shorter array, matching the position in longer array, add the matching item in longer with next value */
    } else {
      const totalV1 = element1 + next;
      const totalArrV1 = totalV1.toString().split('');
      /** if result array length is greater than 1, set first digit to next value, push the second digit to result array */
      if (totalArrV1.length > 1) {
        next = parseInt(totalArrV1[0], 10);
        combinedArr.push(parseInt(totalArrV1[1], 10));
      } else {
        /** if result array length is not greater than 1, push the first result item into result array */
        combinedArr.push(parseInt(totalArrV1[0], 10));
        next = 0;
      }
    }
  }

  /** if next still contains a value rather than 0, add it to result array */
  if (next > 0) {
    combinedArr.push(next);
  }

  return combinedArr;
};

module.exports = addTwoNumbers;
