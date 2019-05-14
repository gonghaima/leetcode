export default (num, k) => {
  const nums = num.split("");
  const requiredSize = nums.length - k;

  //combile and remove leading zero
  const formatNum = arr => {
    let res = [];
    let leading = true;
    arr.map(i => {
      if (i === "0" && leading === true) {
      } else {
        leading = false;
        res.push(i);
      }
    });
    return res.join("");
  };

  const formatNumAsNumber = arr => {
    return Number(formatNum(arr));
  };

  /**get all combination util start */
  var Util = function() {};

  Util.getCombinations = function(array, size, start, initialStuff, output) {
    if (initialStuff.length >= size) {
      if (
        output[0] &&
        formatNumAsNumber(output[0]) > formatNumAsNumber(initialStuff)
      ) {
        output[0] = initialStuff;
      } else {
        output.push(initialStuff);
      }
    } else {
      var i;

      for (i = start; i < array.length; ++i) {
        Util.getCombinations(
          array,
          size,
          i + 1,
          initialStuff.concat(array[i]),
          output
        );
      }
    }
  };

  Util.getAllPossibleCombinations = function(array, size, output) {
    Util.getCombinations(array, size, 0, [], output);
  };

  /**get all combination util end */

  let combinations = [];
  Util.getAllPossibleCombinations(nums, requiredSize, combinations);

  const result = formatNum(combinations[0]);
  return result || "0";
};
