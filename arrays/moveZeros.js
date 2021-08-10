// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in -place without making a copy of the array.

let nums = [0, 0, 1, 13, 2, 0]
//Output: [1, 3, 12, 0, 0]

const moveZero = (nums) => {
    let ind = []
    nums.map((num, index) => {
        if (num === 0) {
            ind.push(index)
        } 
    }) 

    ind.map((item, index) => {
        nums.splice(item-index, 1)
        nums.push(0)
    })
    
    return nums
}


//alternative solution
// let zeroes = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//         nums.splice(i, 1);
//         zeroes.push(0);
//         i--;
//     }
// }

// return nums.push(...zeroes);

console.log(moveZero(nums))