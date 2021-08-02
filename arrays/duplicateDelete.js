// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
let nums = [1, 1, 2]
const deleteDuplicates = (nums) => {
    // let newNum = num.slice()
    // nums = [...new Set(newNum)]
    // return nums
    // num = num.filter((value, index) => {
    //     return num.indexOf(value) === index
    // })
    // return num
    return nums = [...new Set(nums)]
}

console.log(deleteDuplicates(nums))

//Try Alternatives

//return unique values in arr 
//newArr.filter((x, i, a) => a.indexOf(x) == i)

// let newArr = []
// num.map((item, index) => {
//     if (newArr.indexOf(item) === -1) {
//         newArr.push(item)
//     } else if (newArr.indexOf(item) !== index) {
//         num.splice(index, 1)
//     }
// })
// return num