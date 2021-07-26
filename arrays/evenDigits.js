//Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12, 345, 2, 6, 7896]
// Output: 2
// Explanation:
// 12 contains 2 digits(even number of digits). 
// 345 contains 3 digits(odd number of digits). 
// 2 contains 1 digit(odd number of digits). 
// 6 contains 1 digit(odd number of digits). 
// 7896 contains 4 digits(even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

nums = [12, 345, 2, 6, 7896, 78, 96, 1023]

const evenDigits = (num) => {
    let evenCount = 0
    num.map(item => {
        let strItem = item.toString()
        let arrItem = strItem.split("")
        if (arrItem.length % 2 === 0) {
            evenCount++
            return evenCount
        }
    })
    return evenCount
}

console.log(evenDigits(nums))

//alternate solutions usign for loop faster algorithm

// const findNumbers = function (nums) {
//     let result = 0;
//     for (let i of nums) {
//         if (String(i).length % 2 === 0) {
//             result += 1;
//         }
//     }
//     return result;
// };

//alternate solution using reduce

// function foo(nums) {
//     return nums.reduce((prev, num) => {
//         return String(num).length % 2 === 0 ? prev + 1 : prev
//     }, 0)
// };