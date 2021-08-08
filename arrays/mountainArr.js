// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:
// Input: arr = [0, 3, 2, 1]
// Output: true

let arr = [0, 3, 2, 1]

var validMountainArray = function (arr) {
    if (arr.length < 3) return false
    let up = true
    let wentUp = false
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false
        if (up) {
            if (arr[i] <= arr[i - 1]) {
                up = false
            } else wentUp = true
        } else if (arr[i] >= arr[i - 1]) return false
    }
    return up === false && wentUp
};

console.log(validMountainArray(arr))
