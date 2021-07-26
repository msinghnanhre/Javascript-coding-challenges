//Given a binary array nums, return the maximum number of consecutive 1's in the array.
//Input: nums = [1,1,0,1,1,1]
//Output: 3
//Explanation: The first two digits or the last three digits are consecutive 1s.The maximum number of consecutive 1s is 3.

let nums = [1, 1, 1, 1, 0, 1, 1, 1]
let nums2 = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1]

const consecutive = (arr) => {
    let count = 0
    let maxResult = 0
    arr.map(item => {
        if (item === 1) {
            count ++
            maxResult = Math.max(maxResult, count)
        }
        else {
            count = 0
        }
        return maxResult
    })
    return maxResult
}

console.log(consecutive(nums2))

//alternate solution found after looking into leet code other solutions 
//much faster and less memory usage
const findMaxConsecutiveOnes = function (nums) {

    let i = 0, len = 0, max = 0;
    while (i < nums.length) {
        if (nums[i] === 1) {
            len++;
            max = Math.max(max, len);
        } else {
            len = 0;
        }
        i++;
    }
    return max;
};

console.log(findMaxConsecutiveOnes(nums))