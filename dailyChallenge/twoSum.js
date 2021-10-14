// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2, 7, 11, 15]
let target = 9


var twoSum = function (nums, target) {
    let indexes = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                indexes.push(i, j)
                return indexes
            }
        }
    }
    return indexes

    // var twoSum = function (nums, target) {
    //     let map = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         const num = nums[i];
    //         const diff = target - num;
    //         if (map[diff] != undefined) {
    //             return [map[diff], i];
    //         } else {
    //             map[num] = i;
    //         }
    //     }
    // };
};

console.log(twoSum(nums, target))
