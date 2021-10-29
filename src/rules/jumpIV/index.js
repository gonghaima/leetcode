/**
 * @param {number[]} arr
 * @return {number}
 */

/**********************************************************************************************
 *  Runtime: 208 ms, faster than 100.00% of JavaScript online submissions for Jump Game IV.   *
 * Memory Usage: 70.4 MB, less than 64.91% of JavaScript online submissions for Jump Game IV. *
 **********************************************************************************************/


var minJumps = function (arr) {
  let valuePositionsMap = getValuePositionsMap(arr);
  let mySet = new Set();
  mySet.add(0);
  let aoArray = [0];
  let counter = 0;
  while (!mySet.has(arr.length - 1)) {
    counter++;
    let newArray = [];
    for (let currP of aoArray) {
      for (let item of findAllOptions(arr, currP, mySet, valuePositionsMap)) {
        newArray.push(item);
        mySet.add(item);
        if (item == arr.length - 1) {
          break;
        }
      }
      if (mySet.has(arr.length - 1)) {
        break;
      }
    }
    aoArray = newArray;
  }
  return counter;
};

function getValuePositionsMap(arr) {
  let result = new Map();
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!result.has(arr[i])) {
      result.set(arr[i], []);
    }
    result.get(arr[i]).push(i);
  }
  return result;
}

function findAllOptions(arr, currP, mySet, valuePositionsMap) {
  let result = [];
  if (currP > 0 && arr[currP - 1] != arr[currP] && !mySet.has(currP - 1)) {
    result.push(currP - 1);
  }
  if (currP < arr.length - 1 && arr[currP + 1] != arr[currP] && !mySet.has(currP + 1)) {
    result.push(currP + 1);
  }
  if (valuePositionsMap.has(arr[currP])) {
    for (let i of valuePositionsMap.get(arr[currP])) {
      if (i != currP && !mySet.has(i)) {
        result.push(i);
      }
    }
    valuePositionsMap.delete(arr[currP]);
  }
  return result;
}
export default minJumps;