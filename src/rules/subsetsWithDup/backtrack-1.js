/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 76 ms, faster than 85.95% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 42.6 MB, less than 14.67% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// idea from the subsets solution - backtrack

var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a-b);   
    const res = [];
    function fn(length, start=0, arr = []) {
        if (arr.length === length) {
            res.push(arr.slice());
            return;
        };
        for(let i=start; i<nums.length; i++) {       
            if (i !== start && nums[i-1] === nums[i]) continue;
            arr.push(nums[i]);
            fn(length, i+1, arr);
            arr.pop();            
        };
    };

    for(let length=0; length<=nums.length; length++) {
        fn(length);
    }
    return res;
};

export default subsetsWithDup;