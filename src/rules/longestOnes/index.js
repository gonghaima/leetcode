/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let zeroCounter = 0;
    let max = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCounter++;
        //right keep moving, until reach to the point, where next item is 0
        if (zeroCounter === k && (right + 1) < nums.length && nums[right + 1] === 0) {
            max = Math.max(max, right - left + 1);
            while (zeroCounter === k) {
                max = Math.max(max, right - left + 1);
                if (nums[left] === 0) zeroCounter--;
                left++;
            }
        }
    }
    return max;
};

export default longestOnes;