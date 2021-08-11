// Given integer array nums, return the third maximum number 
//in this array.If the third maximum does not exist, return 
//the maximum number.

// Input: nums = [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Input: nums = [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

let nums = [1, 3,3,3, 7, 9]

const thirdMax = (nums) => {
    let sortedUnique = [...new Set(nums)].sort((a, b) => b - a)

    let result = 0
    if (sortedUnique.length <= 2) {
        result = Math.max(...sortedUnique)
    } else {
        result = sortedUnique[2]
    }
    return result
}

console.log(thirdMax(nums))