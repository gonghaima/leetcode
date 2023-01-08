/**
 * @param {number[]} nums
 * @return {number[]}
 */

/***********
 * Runtime *
 * 270 ms  *
 * Beats   *
 * 98.56%  *
 * Memory  *
 * 70.7 MB *
 * Beats   *
 * 79.86%  *
 ***********/

class BinaryIndexedTree {
    constructor(size) {
        this.bit = new Array(size);
    }
    sum(index) {
        let count = 0;
        while (index > 0) {
            count += this.bit[index] || 0;
            index = index - (index & -index); // this is to get parent node in binary indexed tree
        } 
        return count;
    }
    update(index, delta) {
        while (index < this.bit.length) {
            this.bit[index] = (this.bit[index] || 0) + delta;
            index = index + (index & -index); // this is to get next node in binary indexed tree
        }
    }
}



var countSmaller = function(nums) {
    let counts = new Array(nums.length);
    let delta = 1e4+1; // Math.pow(10,4) +1 this is to handle negative numbers to make them positive as binary indexed tree takes indexes which is >= 0
    let bitArray = new BinaryIndexedTree(2e4+2);
    for (let i = nums.length - 1; i >= 0; i--) {
        counts[i] = bitArray.sum(nums[i] + delta - 1);
        bitArray.update(nums[i]+delta, 1);
    }
    return counts;
};

export default countSmaller;
