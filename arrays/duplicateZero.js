// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Input: [1, 0, 2, 3, 0, 4, 5, 0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]

const input = [0, 1, 7, 6, 0, 2, 0, 7]

const duplicate = (arr) => {
    let initialLength = arr.length;
    let zeroInd = []
    arr.forEach((item, index) => {
        if (item === 0) {
            zeroInd.push(index)
        }
    })
    zeroInd.forEach((item, index) => {
        arr.splice(item + index, 0, 0)
        arr.pop()
    })
    
}

duplicate(input)
console.log((input))