/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const queue = [];

  queue.push([[], nums]);

  while (queue.length) {
    const [currentSequence, availableNumbers] = queue.shift();

    if (availableNumbers.length === 0) {
      result.push(currentSequence);
      continue;
    }

    for (let i = 0; i < availableNumbers.length; i++) {
      const number = availableNumbers[i];
      queue.push([
        [...currentSequence, number],
        [...availableNumbers.slice(0, i), ...availableNumbers.slice(i + 1)],
      ]);
    }
  }

  return result;
};

export default permute;
