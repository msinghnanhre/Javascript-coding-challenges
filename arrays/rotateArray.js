
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
const rotateArray = (arr, num) => {
    if (num > 0) {
        let rotateCount = 0
        while (rotateCount < num) {
            let numDelete = arr.pop()
            arr.unshift(numDelete)
            rotateCount++
        }
        return arr
    }
}
console.log(rotateArray(nums, k))