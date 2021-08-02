// Input: arr = [10, 2, 5, 3]
// Output: true
// Explanation: N = 10 is the double of M = 5, that is, 10 = 2 * 5.

// Input: arr = [7, 1, 14, 11]
// Output: true
// Explanation: N = 14 is the double of M = 7, that is, 14 = 2 * 7.

let arr = [-2, 0, 10, -19, 4, 6, -8]
const doubles = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (((arr[i] === arr[j] * 2) || (arr[i] === arr[j] / 2)) && i !== j) {
                return true
            }
        }  
    }
    return false
}


// arr.sort();
// for (let i = 0; i < arr.length; i++) {
//     let N = (2 * arr[i]);
//     if (arr.includes(N) && arr.indexOf(N) !== i) {
//         return true;
//     }
// }
// return false;

console.log(doubles(arr))