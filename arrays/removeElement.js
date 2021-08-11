// Input: nums = [3, 2, 2, 3], val = 3
// Output: 2, nums = [2, 2, _, _]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k(hence they are underscores).

let nums = [3, 2, 2, 3]
let val = 3

const removeElements = (nums, val) => {
    let i = 0
    while (nums.includes(val)) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums
}

console.log(removeElements(nums, val))