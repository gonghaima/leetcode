/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    nums.reduce((sets, num) => {
        sets.forEach(set => sets.push([...set, num])) || sets
    },
        [[]]);
    let sets=[[]];
    for (const num of object) {
        for (const set of sets) {
            sets.push([...set, num]);
        };
    }
    return sets;
};

export default subsets;