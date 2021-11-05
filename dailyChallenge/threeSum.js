let nums = [-1, 0, 1, 2, -1, -4]

const threeSum = (nums) => {
    let numsSorted = nums.sort((a, b) => a - b)
    let desiredIndex = []
    //return numsSorted
    nums.sort(function (a, b) { return a - b });
    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) {
            continue;
        }
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                desiredIndex.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left - 1] == nums[left]) {
                    left++;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return desiredIndex
}
console.log(threeSum(nums))
