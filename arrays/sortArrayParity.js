//Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.
// Input: nums = [3, 1, 2, 4]
// Output: [2, 4, 3, 1]
// Explanation: The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.

let nums = [3, 1, 2, 4]

const sortArr = (nums) => {
    nums.forEach((num, index) => {
        if (num % 2 === 0) {
            nums.splice(index, 1)
            nums.unshift(num)
        }
        return num
    })
    return nums
}

console.log(sortArr(nums))