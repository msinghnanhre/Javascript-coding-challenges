// Input: heights = [1, 1, 4, 2, 1, 3]
// Output: 3
// Explanation:
// heights: [1, 1, 4, 2, 1, 3]
// expected: [1, 1, 1, 2, 3, 4]
// Indices 2, 4, and 5 do not match.

let heights = [1, 1, 4, 2, 1, 3]

const heightChecker = (heights) => {
    let sortedHeights = heights.slice().sort((a, b) => a - b)
    let result = 0
    heights.forEach((height, i) => {
        if (height !== sortedHeights[i]) {
            result = result+1
        }
    })
    return result
}
console.log(heightChecker(heights))