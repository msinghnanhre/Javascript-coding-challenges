/**
 * Trap Rainwater
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * Example:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Constraints:
 * - n == height.length
 * - 1 <= n <= 2 * 10^4
 * - 0 <= height[i] <= 10^5
 *
 * @param {number[]} height - An array of non-negative integers representing the elevation map
 * @return {number} - The amount of water that can be trapped
 */
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

function trapWater(height) {
  let max = 0;
  let left = 0;
  let maxLeft = height[left];
  let right = left + 1;

  while (right < height.length && left < right) {
    if (height[right] > height[left]) {
      let area = (right - left - 1) * Math.min(height[left], height[right]);
      for (let i = left + 1; i < right; i++) {
        area -= height[i];
      }
      max += area;
      left = right;
      maxLeft = height[left];
    } else if (height[right] === height[left]) {
      left = right;
      maxLeft = height[left];
    }
    right++;
    maxLeft = Math.max(maxLeft, height[right]);
  }

  if (height[right] < height[left]) {
    let area = (right - left - 1) * maxLeft;
    for (let i = left + 1; i < right; i++) {
      area -= height[i];
    }
    max += area;
  }
  return max;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Expected output: 9

console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected output: 6
console.log(trapWater([4, 2, 0, 3, 2, 5])); // Expected output: 9
