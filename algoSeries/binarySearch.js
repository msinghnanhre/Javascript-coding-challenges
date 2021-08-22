//Binary search is much faster than linear search, When we
//are trying to find number a in a sorted array of N values. The time complexity for linear search is O(N) whereas time complexity for a binary search is O(log(N)). This is because of shortening of the array with each iteration by half.

let arr = [1, 2, 4, 5, 6, 8, 9]
let find = 5


//iterative function 
const binarySearch = (arr, number) => {
    let start = 0
    let end = arr.length-1
    while(start <= end){
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === number) {
            return true
        }
        else if (number < arr[middle]) {
            end = middle -1        
        } else {
            start = middle +1
        }
    }
    return false
}


//recursive method

let recursiveBinary = (arr, number, start, end) => {
    if (start > end) return false
    
    let mid = Math.floor((start + end) / 2)

    if (number > arr[mid]) {
        return recursiveBinary(arr, number, mid + 1, end)
    } else {
        return recursiveBinary(arr, number, start, mid-1 )
    }
}


console.log(binarySearch(arr, find))
console.log(recursiveBinary(arr, find, 0, arr.length-1))