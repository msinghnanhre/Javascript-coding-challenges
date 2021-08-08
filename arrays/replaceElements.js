// Input: arr = [17, 18, 5, 4, 6, 1]
// Output: [18, 6, 6, 6, 1, -1]

let arr = [17, 18, 5, 4, 6, 1]

const replace = (arr) => {
   return arr.map((item, index) => {
        if (index === arr.length-1) {
            item = -1
        }
        else {
            let leftArr = (arr.slice(index + 1, arr.length + 1))
            item = Math.max(...leftArr) 
        }
        return item
     })
}

console.log(replace(arr))