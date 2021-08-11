//Given an array nums of n integers where nums[i] is in the range[1, n], return an array of all the integers
// in the range[1, n] that do not appear in nums.

// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [5, 6]

let nums = [1, 1]

const numInRange = (nums) => {
    let range = nums.length
    let newArr = []

    let missing = []
    for (let i = 1; i < range+1; i++){
        newArr.push(i)
    }
    newArr.forEach((item) => {
        if (!nums.includes(item) && item !== 0) {
            missing.push(item)
        }
    })
    return missing

}

console.log(numInRange(nums))