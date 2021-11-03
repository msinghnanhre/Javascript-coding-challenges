const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [2, 4, 6, 8]
const arr3 = [2, 4, 8, 9]
// Output: [2,4]

function compiledArray(arr1, arr2, arr3) {
    // const largestArr = arr1.length>arr2.length? arr1.lenght: arr2.length
    const combinedArr = []
    const finalArr = []

    arr1.forEach(item => {
        if (arr2.includes(item)) {
            combinedArr.push(item)
        }
    })

    combinedArr.forEach(item => {
        if (arr3.includes(item)) {
            finalArr.push(item)
        }
    })
    return finalArr;
};

