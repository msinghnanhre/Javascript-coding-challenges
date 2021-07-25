//flatten the given array into single array.
let array = [1, 2, , 3, 4, [5, 6, 7], [8, 9, [4,5,2], 10]]

let flattenArray = (arr) => {
    let newFlattenArray = arr.reduce((acc, item) => {

        //if item itself is an array
        if (Array.isArray(item)) {
            //run the same function on item
            acc = acc.concat(flattenArray(item))
        }
        
        //if item is single item
        else {
            acc.push(item)
            //alternatively
            //acc = [...acc, item]
        }
        return acc
    }, [])
    return newFlattenArray
}

console.log(flattenArray(array))