// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2, 7, 11, 15]
let target = 9


var twoSum = function (nums, target) {
    // let numIndex = Math.floor(Math.random() * nums.length)
    // let index1;
    // let index2;

    // nums.map((item, index) => {
    //     if (item + nums[numIndex] === target && index !== numIndex){
    //         index1 = index
    //         index2 = numIndex
    //     }
    //     return [index1, index2]
    // })
    // return [index1, index2]
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
};

console.log(twoSum(nums, target))