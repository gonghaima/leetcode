


/************************************************************************************************************
 *   RUNTIME: 576 MS, FASTER THAN 17.67% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM.   *
 * MEMORY USAGE: 53.6 MB, LESS THAN 62.72% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM. *
 ************************************************************************************************************/

// https://leetcode.com/problems/partition-equal-subset-sum/submissions/

var canPartition = function (nums) {
    function permute(sum1, sum2 = 0, idx = 0, memo = new Map()) {
        if (memo.has(`${sum1}-${sum2}`)) return memo.get(`${sum1}-${sum2}`);
        if (sum1 === sum2) return true;
        let result = false;

        for (let i = idx; i < nums.length; i++) {
            if (nums[i] > sum1) continue;
            if (permute(sum1 - nums[i], sum2 + nums[i], i + 1, memo)) {
                result = true;
                break;
            };
        }
        memo.set(`${sum1}-${sum2}`, result);
        return result;
    }
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    return permute(total)
};

export default canPartition;