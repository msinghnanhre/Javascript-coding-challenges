const arr = [2, 5, 6, 1, 10, 19, 7, 35, 4]

function swap(arr, smaller, bigger) {
    var temp = arr[smaller];
    arr[smaller] = arr[bigger];
    arr[bigger] = temp;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length ; i++){
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j  
            }  
        }
        swap(arr, minIndex, i)
    }
    return arr
    
}

console.log(selectionSort(arr))